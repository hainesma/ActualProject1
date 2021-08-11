using ActualProject1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActualProject1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        ActualProject1Context db = new ActualProject1Context();
        
        [HttpGet("pw={input}")]
        public string Encrypt(string input)
        {
            Random r = new Random(input[0]);
            List<char> output = new List<char>();
            int minLength = 7;
            for (int i = 0; i < input.Length; i++)
            {
                char c = input[i];
                c = (char)(c + r.Next(-26, 27));
                output.Add(c);
            }
            
            if (output.Count < minLength)
            {
                for (int i = output.Count; output.Count < 15; i++)
                {
                    string let = Char.ConvertFromUtf32(r.Next(65, 123));
                    output.Add(let[0]);
                }
                
            }

            return new string(output.ToArray());
        }
        
        [HttpPost("Register/name={uName}&pw={password}")]
        public void Register(string email, string password)
        {
            string hashed = Encrypt(email);
            UserProfiles u = new UserProfiles()
            {
                Password = hashed,
                Email = email
            };
            
            db.UserProfiles.Add(u);
            db.SaveChanges();
        }
        
        //public bool Login(string userName, string password)
        //{
        //}
    }
}