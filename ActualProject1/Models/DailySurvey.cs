using System;
using System.Collections.Generic;

#nullable disable

namespace ActualProject1.Models
{
    public partial class DailySurvey
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? EmotionLevel { get; set; }
        public int? EnergyLevel { get; set; }
        public string DailyGoal { get; set; }
        public bool? PreviousGoalAchieved { get; set; }

        public virtual UserProfile User { get; set; }
    }
}
