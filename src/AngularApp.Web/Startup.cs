using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AngularApp.Common;
using AngularApp.Domain.Core;
using AngularApp.Domain.Entities.Identity;
using AngularApp.IdentityServer.Infrastructure;
using AngularApp.Web.Setup;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Runtime;

namespace AngularApp.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            var configuration = new ConfigurationBuilder(appEnv.ApplicationBasePath)
                .AddJsonFile("config.json")
                .AddJsonFile($"config.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                configuration.AddUserSecrets();
            }

            configuration.AddEnvironmentVariables();
            Configuration = configuration.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // DI bindings
            new DependencyInjection().Bind(services);

            services.Configure<AppSettings>(Configuration.GetConfigurationSection("AppSettings"));
            services.AddDataProtection();
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
        {
            // Add the console logger.
            loggerfactory.AddConsole(minLevel: LogLevel.Warning);

            // Configure identity server
            new IdentityServerMiddleware().Configure(app);

            // Configure web api
            new HttpConfiguration().MapHttpAttributeRoutes();

            // Add static files to the request pipeline.
            app.UseStaticFiles();

            // Initialize the DB
            if (env.IsEnvironment("Development"))
            { 
                var dbInit = app.ApplicationServices.GetService<InitializeDB>();
                dbInit.Initialize();
            }
        }
    }
}
