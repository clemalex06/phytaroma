using System.Collections.Generic;

namespace WikiPhytoScrapper.Models
{
    public class PlantProperty
    {
        public string Name
        {
            get
            {
                return PropertyCategory.ToString();
            }
        }
        public List<string> Content { get; set; }

        public PropertyCategory PropertyCategory { get; set; }
    }

    public enum PropertyCategory
    {
        Name,
        Description,
        History,
        Dosis,
        Composition,
        HealthProperty,
        Indications,
        UndesirableEffects
    }
}
