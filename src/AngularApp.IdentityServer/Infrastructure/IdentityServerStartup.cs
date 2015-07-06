using AngularApp.IdentityServer.Config;
using AngularApp.Web.Infrastructure;
using IdentityServer3.Core.Configuration;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.Logging;

namespace AngularApp.IdentityServer.Infrastructure
{
    public static class IdentityServerStartup
    {
        public static void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
        {
            app.Map("/core", core =>
            {
                var factory = InMemoryFactory.Create(
                                        users: Users.Get(),
                                        clients: Clients.Get(),
                                        scopes: Scopes.Get());

                var idsrvOptions = new IdentityServerOptions
                {
                    IssuerUri = Constants.IssuerUrl,
                    SiteName = Constants.SiteName,
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
                    options.Authority = Constants.AuthorizationUrl;
                    options.MetadataAddress = Constants.AuthorizationUrl + "/.well-known/openid-configuration";
                    options.TokenValidationParameters.ValidAudience = Constants.BaseUrl + "/resources";
                });

                // for web api
                api.UseMvc();
            });
        }
    }
}