using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ActualProject1.Models;

namespace ActualProject1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfilesController : ControllerBase
    {
        private readonly ActualProject1Context _context;

        public UserProfilesController(ActualProject1Context context)
        {
            _context = context;
        }

        // GET: api/UserProfiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserProfile>>> GetUserProfiles()
        {
            return await _context.UserProfiles.ToListAsync();
        }

        // GET: api/UserProfiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserProfile>> GetUserProfiles(int id)
        {
            var userProfiles = await _context.UserProfiles.FindAsync(id);

            if (userProfiles == null)
            {
                return NotFound();
            }

            return userProfiles;
        }

        // PUT: api/UserProfiles/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserProfiles(int id, UserProfile userProfiles)
        {
            if (id != userProfiles.Id)
            {
                return BadRequest();
            }

            _context.Entry(userProfiles).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserProfilesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserProfiles
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserProfile>> PostUserProfiles(UserProfile userProfiles)
        {
            Console.WriteLine(userProfiles);
            _context.UserProfiles.Add(userProfiles);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserProfiles", new { id = userProfiles.Id }, userProfiles);
        }

        // DELETE: api/UserProfiles/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserProfile>> DeleteUserProfiles(int id)
        {
            var userProfiles = await _context.UserProfiles.FindAsync(id);
            if (userProfiles == null)
            {
                return NotFound();
            }

            _context.UserProfiles.Remove(userProfiles);
            await _context.SaveChangesAsync();

            return userProfiles;
        }

        private bool UserProfilesExists(int id)
        {
            return _context.UserProfiles.Any(e => e.Id == id);
        }
    }
}
