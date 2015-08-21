using System.Collections.Generic;
using IdentityServer3.Core.Services.InMemory;

namespace AngularApp.IdentityServer.Config.Factory
{
    public static class Users
    {
        public static List<InMemoryUser> Get()
        {
            return new List<InMemoryUser>
            {
                new InMemoryUser
                {
                    Username = "testUser",
                    Password = "testPwd",
                    Subject = "I am the Subject"
                }
            };
        }
    }
}
