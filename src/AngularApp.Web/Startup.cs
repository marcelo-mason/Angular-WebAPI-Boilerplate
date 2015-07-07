using System;
using AngularApp.Common;
using AngularApp.IdentityServer.Infrastructure;
using AngularApp.Web.Core;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Runtime;
using Omu.ValueInjecter;

namespace AngularApp.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            // Setup configuration sources.
            var configuration = new ConfigurationBuilder(appEnv.ApplicationBasePath)
                .AddJsonFile("config.json")
                .AddJsonFile($"config.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This reads the configuration keys from the secret store.
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                configuration.AddUserSecrets();
            }

            configuration.AddEnvironmentVariables();
            Configuration = configuration.Build();
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // Add EF services to the services container.
            /*
            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

            // Add Identity services to the services container.
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();
                */
            // Add Application settings to the services container.
            //services.Configure<AppSettings>(Configuration.GetConfigurationSection("AppSettings"));

            services.AddDataProtection();
            services.AddMvc();

            // Ninject bindings
            return NinjectBindings.Apply(services, Configuration);
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
        {
            // configure OpenID/OAuth2
            IdentityServerStartup.Configure(app, env, loggerfactory);

            // Add static files to the request pipeline.
            app.UseStaticFiles();
        }
    }
}
