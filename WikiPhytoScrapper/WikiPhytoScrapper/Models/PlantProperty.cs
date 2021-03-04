using System.Collections.Generic;

namespace WikiPhytoScrapper.Models
{
    public class PlantProperty
    {
        public string Name { get; set; }
        public string Content { get; set; }
        public List<PlantProperty> SubProperties { get; set; }
    }
}
