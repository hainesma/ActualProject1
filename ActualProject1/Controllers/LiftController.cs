using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ActualProject1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActualProject1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LiftController : ControllerBase
    {
        public LiftDAL liftDAL = new LiftDAL();

        //Get api/Lift
        [HttpGet]
        public async Task<ActionResult<Lift>> GetLift()
        {
            Lift lift = liftDAL.GetLift();
            return lift;
        }
    }
}
