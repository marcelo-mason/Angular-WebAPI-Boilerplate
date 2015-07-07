using AngularApp.Common;
using AngularApp.IdentityServer.Config;
using AngularApp.IdentityServer.Config.Factory;
using IdentityServer3.Core.Configuration;
using IdentityServer3.Core.Logging;
using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.OptionsModel;

namespace AngularApp.IdentityServer.Infrastructure
{
    public static class IdentityServerStartup
    {
        public static void Configure(IApplicationBuilder app)
        {
            var settings = app.ApplicationServices.GetService<IOptions<AppSettings>>();

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
                    IssuerUri = settings.Options.IssuerUrl,
                    SiteName = settings.Options.SiteTitle,
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
                    options.Authority = settings.Options.AuthorizationUrl;
                    options.MetadataAddress = settings.Options.AuthorizationUrl + "/.well-known/openid-configuration";
                    options.TokenValidationParameters.ValidAudience = settings.Options.BaseUrl + "/resources";
                });

                // for web api
                api.UseMvc();
            });
        }
    }
}