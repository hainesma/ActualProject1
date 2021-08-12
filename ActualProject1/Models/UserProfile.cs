using System;
using System.Collections.Generic;

#nullable disable

namespace ActualProject1.Models
{
    public partial class UserProfile
    {
        public UserProfile()
        {
            DailySurveys = new HashSet<DailySurveys>();
        }

        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Mantra { get; set; }
        public int? FoodRegimenFk { get; set; }
        public int? PhilosphySchoolFk { get; set; }

        public virtual FoodRegimen FoodRegimenFkNavigation { get; set; }
        public virtual PhilosophySchool PhilosphySchoolFkNavigation { get; set; }
        public virtual ICollection<DailySurveys> DailySurveys { get; set; }
    }
}
