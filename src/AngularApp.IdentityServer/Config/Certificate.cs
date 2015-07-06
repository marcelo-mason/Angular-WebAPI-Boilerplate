using System;
using System.Security.Cryptography.X509Certificates;

namespace AngularApp.IdentityServer.Config
{
    public static class Certificate
    {
        public static X509Certificate2 Get()
        {
            var certFile = AppDomain.CurrentDomain.BaseDirectory + "\\idsrv3test.pfx";
            return new X509Certificate2(certFile, "idsrv3test");
        }
    }
}
