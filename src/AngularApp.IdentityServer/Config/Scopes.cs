using System.Collections.Generic;
using IdentityServer3.Core.Models;

namespace AngularApp.IdentityServer.Config
{
    public static class Scopes
    {
        public static List<Scope> Get()
        {
            var scopes = new List<Scope>();

            scopes.AddRange(StandardScopes.All);

            scopes.Add(new Scope
            {
                Name = "api1",
                DisplayName = "some scope",
                Emphasize = true,
                ShowInDiscoveryDocument = true,
                Type = ScopeType.Resource
            });

            return scopes;
        }
    }
}
