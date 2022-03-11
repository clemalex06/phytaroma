using System.Collections.Generic;

namespace WikiPhytoScrapper.Models
{
    public class PlantFamily
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<Plant> Plants { get; set; }
        public string Link { get; set; }
    }
}
