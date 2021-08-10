using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActualProject1.Models
{

        public class Lift
        {
            public int id { get; set; }
            public string name { get; set; }
            public string uuid { get; set; }
            public int exercise_base { get; set; }
            public string image { get; set; }
            public bool is_main { get; set; }
            public string status { get; set; }
        }

    
}
