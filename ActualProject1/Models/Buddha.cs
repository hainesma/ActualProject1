using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActualProject1.Models
{
    public class Buddha
    {

        public class BuddhaQuoteList
        {
            public BuddhaQuote[] Property1 { get; set; }
        }

        public class BuddhaQuote
        {
            public int id { get; set; }
            public string author { get; set; }
            public string quote { get; set; }
        }

    }
}
