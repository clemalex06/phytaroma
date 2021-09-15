using System.Collections.Generic;

namespace WikiPhytoScrapper.Models
{
    public class Plant
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public List<PlantProperty> Properties { get; set; }
    }

}
