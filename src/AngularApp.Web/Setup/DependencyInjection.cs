using AngularApp.Domain;
using AngularApp.Domain.Core;
using AngularApp.Domain.Entities.Identity;
using AngularApp.Service;
using Microsoft.AspNet.Identity;
using Microsoft.Framework.DependencyInjection;

namespace AngularApp.Web.Setup
{
    public class DependencyInjection
    {
        public void Bind(IServiceCollection services)
        {
            services.AddScoped<IAppRepository, AppRepository>();
            services.AddScoped<IAppService, AppService>();
            services.AddScoped<InitializeDB, InitializeDB>();
            services.AddScoped<AppDbContext, AppDbContext>();
            services.AddScoped<UserManager<AppUser>, UserManager<AppUser>>();
        } 
    }
}