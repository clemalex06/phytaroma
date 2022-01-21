using System.Collections.Generic;

namespace WikiPhytoScrapper.Models
{
    public class PlantProperty
    {
        public string Name { get; set; }
        public List<string> Content { get; set; }
    }

    public enum PropertyCategory
    {
        Name,
        Composition,
        Description,
        HealthProperty,
        Indications,
        Dosis,
        History,
        UndesirableEffects
    }
}
