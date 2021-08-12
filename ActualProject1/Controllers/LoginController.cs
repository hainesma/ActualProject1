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

        [HttpPost("Register/email={email}&pw={password}&fname={firstName}&date={birthDate}&mantra={mantra}&food={foodRegimenFK}&philo={philosophySchoolFk}")]
        public void Register(string email, string password, string firstName, DateTime birthDate, string mantra, int foodRegimenFK, int philosophySchoolFK)
        {
            string hashed = Encrypt(password);
            UserProfile u = new UserProfile()
            {
                Password = hashed,
                Email = email,
                FirstName = firstName,
                BirthDate = birthDate,
                Mantra = mantra,
                FoodRegimenFk = foodRegimenFK,
                PhilosphySchoolFk = philosophySchoolFK,
            };

            db.UserProfiles.Add(u);
            db.SaveChanges();
        }

        [HttpGet("Login/email={email}&pw={password}")]
        public bool Login(string email, string password)
        {
            string hashed = Encrypt(password);

            List<UserProfile> x = db.UserProfiles.Where(x => x.Email == email).ToList();
            if (x.Count == 0)
            { return false; }
            else
            {
                if (hashed == x[0].Password)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        [HttpGet("details/email={email}")]
        public UserProfile GetUserProfile(string email)
        {

            List<UserProfile> x = db.UserProfiles.Where(x => x.Email == email).ToList();
            if (x.Count == 0)
            {
                return null;
            }
            else
            {
                return x[0];
            }
        }
    }
}