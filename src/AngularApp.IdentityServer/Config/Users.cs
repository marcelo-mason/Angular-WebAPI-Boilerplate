using System.Collections.Generic;
using IdentityServer3.Core.Services.InMemory;

namespace AngularApp.IdentityServer.Config
{
    public static class Users
    {
        public static List<InMemoryUser> Get()
        {
            return new List<InMemoryUser>
            {
                new InMemoryUser
                {
                    Username = "test",
                    Password = "test",
                    Subject = "I am the Subject"
                }
            };
        }
    }
}
