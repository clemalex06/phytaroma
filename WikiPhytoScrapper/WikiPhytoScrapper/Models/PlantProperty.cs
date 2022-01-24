using System.Collections.Generic;

namespace WikiPhytoScrapper.Models
{
    public class PlantProperty
    {
        public PlantProperty(PropertyCategory property)
        {
            this.PropertyCategory = property;
        }

        public string Name
        {
            get
            {
                return PropertyCategory.ToString();
            }
        }
        public List<string> Content { get; set; }

        private PropertyCategory PropertyCategory { get; set; }
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
        TherapeuticEffects,
        UndesirableEffects
    }
}
