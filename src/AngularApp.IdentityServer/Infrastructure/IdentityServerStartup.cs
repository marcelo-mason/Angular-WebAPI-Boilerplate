using AngularApp.Common;
using AngularApp.IdentityServer.Config;
using AngularApp.IdentityServer.Config.Factory;
using IdentityServer3.Core.Configuration;
using IdentityServer3.Core.Logging;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.Logging;
using Microsoft.Framework.OptionsModel;
using Ninject;

namespace AngularApp.IdentityServer.Infrastructure
{
    public static class IdentityServerStartup
    {
        [Inject]
        private static IOptions<AppSettings> Settings { get; set; }

        public static void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
        {
            LogProvider.SetCurrentLogProvider(new DiagnosticsTraceLogProvider());

            app.Map("/core", core =>
            {
                var factory = InMemoryFactory.Create(
                                        users: Users.Get(),
                                        clients: Clients.Get(),
                                        scopes: Scopes.Get());

                var idsrvOptions = new IdentityServerOptions
                {
                    LoggingOptions = new LoggingOptions
                    {
                        IncludeSensitiveDataInLogs = true,
                        WebApiDiagnosticsIsVerbose = true,
                        EnableWebApiDiagnostics = true,
                        //EnableHttpLogging = true
                    },
                    IssuerUri = Settings.Options.IssuerUrl,
                    SiteName = Settings.Options.SiteTitle,
                    Factory = factory,
                    SigningCertificate = Certificate.Get(),
                    RequireSsl = false,
                    AuthenticationOptions = new AuthenticationOptions { }
                };

                core.UseIdentityServer(idsrvOptions);
            });

            app.Map("/api", api =>
            {
                api.UseOAuthBearerAuthentication(options => {
                    options.Authority = Settings.Options.AuthorizationUrl;
                    options.MetadataAddress = Settings.Options.AuthorizationUrl + "/.well-known/openid-configuration";
                    options.TokenValidationParameters.ValidAudience = Settings.Options.BaseUrl + "/resources";
                });

                // for web api
                api.UseMvc();
            });
        }
    }
}