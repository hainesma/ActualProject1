using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActualProject1.Models
{
    public class Yoga
    {
        public class PoseList
        {
            public Pose[] ListPoses { get; set; }
        }

        public class Pose
        {
            public int id { get; set; }
            public string sanskrit_name { get; set; }
            public string english_name { get; set; }
            public string img_url { get; set; }
            public int user_id { get; set; }
            public DateTime created_at { get; set; }
            public DateTime updated_at { get; set; }
        }

    }
}
