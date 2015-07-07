using Ninject;

namespace AngularApp.Common
{
    public class ServiceLocator
    {
        private readonly IKernel kernel = new StandardKernel();

        public static ServiceLocator Current => new ServiceLocator();

        public T GetInstance<T>()
        {
            return kernel.Get<T>();
        }

        public IKernel GetKernel()
        {
            return kernel;
        }
    }
}