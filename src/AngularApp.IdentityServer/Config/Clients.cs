using System.Collections.Generic;
using IdentityServer3.Core.Models;

namespace AngularApp.IdentityServer.Config
{
    public static class Clients
    {
        public static List<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    //Resource Owner Flow Client (our web UI)
                    ClientName = "WebUI",
                    Enabled = true,

                    ClientId = "IdentityWebUI",
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    Flow = Flows.ResourceOwner,
                    AccessTokenType = AccessTokenType.Jwt,
                    AccessTokenLifetime = 3600

                }
            };
        }
    }
}
