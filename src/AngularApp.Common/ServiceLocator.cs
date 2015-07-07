using System.ComponentModel;
using Ninject;

namespace AngularApp.Common
{
    public class ServiceLocator
    {
        private readonly IKernel _kernel = new StandardKernel();
        private static ServiceLocator _instance;

        public static ServiceLocator Current => _instance ?? (_instance = new ServiceLocator());
        
        public T GetInstance<T>()
        {
            return _kernel.Get<T>();
        }

        public IKernel GetKernel()
        {
            return _kernel;
        }
    }
}