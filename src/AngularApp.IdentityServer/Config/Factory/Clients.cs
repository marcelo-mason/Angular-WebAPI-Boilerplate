using System.Collections.Generic;
using IdentityServer3.Core.Models;

namespace AngularApp.IdentityServer.Config.Factory
{
    public static class Clients
    {
        public static List<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    Enabled = true,
                    ClientName = "WebUI",
                    ClientId = "IdentityWebUI",
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowAccessToAllScopes = true,

                    Flow = Flows.ResourceOwner
                }
            };
        }
    }
}
