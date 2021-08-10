using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ActualProject1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static ActualProject1.Models.Yoga;

namespace ActualProject1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YogaController : ControllerBase
    {
        public YogaDAL yogaDAL = new YogaDAL();

        //Get :api/Yoga/
        [HttpGet]
        public async Task<ActionResult<Pose>> GetPose()
        {
            Pose pose = yogaDAL.GetPose();

            return pose;

        }
    }
}
