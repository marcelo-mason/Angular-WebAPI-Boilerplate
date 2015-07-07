using AngularApp.Common;
using Microsoft.Framework.Configuration;
using Ninject.Activation;
using Omu.ValueInjecter;

namespace AngularApp.Web.Core
{
    public class AppSettingsProvider : Provider<AppSettings>
    {
        private readonly IConfiguration _config;

        public AppSettingsProvider(IConfiguration config)
        {
            _config = config;
        }

        protected override AppSettings CreateInstance(IContext context)
        {
            return Mapper.Map<AppSettings>(_config);
        }
    }
}