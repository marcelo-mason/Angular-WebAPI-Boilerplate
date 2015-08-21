using AngularApp.Domain.Entities.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace AngularApp.Domain.Core
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
  
    }
}