using System;
using AngularApp.Common;
using AngularApp.Domain;
using AngularApp.Service;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.DependencyInjection.Ninject;
using Ninject;
using Ninject.Extensions.Conventions;

namespace AngularApp.Web.Core
{
    public class NinjectBindings
    {
        public IServiceProvider Apply(IServiceCollection services)
        {
            // Create a new Ninject kernel for your bindings 
            var kernel = new StandardKernel();

            // Set up your bindings for DI
            kernel.Bind(k => k.FromAssemblyContaining<IAppService>()
                .SelectAllClasses()
                .InNamespaceOf(typeof(IAppService))
                .BindDefaultInterfaces()
                .Configure(c => c.InRequestScope()));

            kernel.Bind(k => k.FromAssemblyContaining<IAppRepository>()
                .SelectAllClasses()
                .InNamespaceOf(typeof(IAppRepository))
                .BindDefaultInterfaces()
                .Configure(c => c.InRequestScope()));
            
            kernel.Bind<AppSettings>().To<AppSettings>().InSingletonScope();

            // Add all the ASP.NET services to your Ninject kernel
            kernel.Populate(services);

            // Use Ninject to return an instance
            return kernel.Get<IServiceProvider>();
        }
    }
}