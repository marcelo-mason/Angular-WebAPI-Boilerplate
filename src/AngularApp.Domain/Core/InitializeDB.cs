using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AngularApp.Domain.Entities.Identity;
using Microsoft.AspNet.Identity;
using Microsoft.Framework.DependencyInjection;

namespace AngularApp.Domain.Core
{
    public class InitializeDB
    {
        private readonly AppDbContext _context;
        private readonly UserManager<AppUser> _userManager;

        public InitializeDB(AppDbContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public void Initialize()
        {
            var sqlServerDatabase = _context.Database;
            sqlServerDatabase.Delete();
            sqlServerDatabase.Create();
            CreateUsers().Wait();
        }

        private async Task CreateUsers()
        {
            var user = await _userManager.FindByEmailAsync("admin");
            if (user == null)
            {
                user = new AppUser { UserName = "admin", Email = "phaedrus.one@gmail.com" };
                await _userManager.CreateAsync(user, "cacatoi"); 
                await _userManager.AddClaimAsync(user.Id, new Claim("ManageStore", "Allowed"));
            }
        }
    }
}