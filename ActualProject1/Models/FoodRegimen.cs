﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ActualProject1.Models
{
    public partial class FoodRegimen
    {
        public FoodRegimen()
        {
            UserProfiles = new HashSet<UserProfile>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<UserProfile> UserProfiles { get; set; }
    }
}
