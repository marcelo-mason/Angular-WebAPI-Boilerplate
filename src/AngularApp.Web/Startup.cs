using AngularApp.IdentityServer.Config;
using AngularApp.IdentityServer.Infrastructure;
using AngularApp.Web.Properties;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;

namespace AngularApp.Web
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Setup configuration sources.
            var configuration = new Configuration()
                .AddJsonFile("config.json")
                .AddJsonFile($"config.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This reads the configuration keys from the secret store.
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                configuration.AddUserSecrets();
            }

            configuration.AddEnvironmentVariables();
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            // Add Application settings to the services container.
            services.Configure<AppSettings>(Configuration.GetSubKey("AppSettings"));

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

            // Add MVC services to the services container.
            services.AddMvc();
        }


        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
        {
            IdentityServerStartup.Configure(app, env, loggerfactory);

            // Add static files to the request pipeline.
            app.UseStaticFiles();
        }
    }
}
