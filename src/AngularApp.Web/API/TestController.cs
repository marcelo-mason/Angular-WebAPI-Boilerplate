using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

namespace AngularApp.Web.API
{
    //[Authorize]
    [Route("[controller]")]
    public class Test : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            return Json(new
            {
                message = "You See this then it's ok auth is  :" + User.Identity.IsAuthenticated,
            });
        }
    }
}
