using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using WikiPhytoScrapper.Models;

namespace WikiPhytoScrapper.Services
{
    public static class DataSerializer
    {

        private static string ExeFolder => $"D:\\\\";//AppDomain.CurrentDomain.BaseDirectory;
        public static void Serialize(List<PlantFamily> family, string FileName)
        {
            var outputPath = $"{ExeFolder}\\{FileName}.json";
            using (StreamWriter outputFile = new StreamWriter(outputPath))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(outputFile, family);
            }
        }

        public static void Serialize(Plant plant)
        {
            var outputPath = $"{ExeFolder}\\Datas\\{plant.Id}.json";
            using (StreamWriter outputFile = new StreamWriter(outputPath))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(outputFile, plant);
            }
        }

        public static List<PlantFamily> Deserialize(string fileName)
        {
            using (StreamReader file = File.OpenText(@"D:\Dev\phytaroma\WikiPhytoScrapper\WikiPhytoScrapper\Datas\PlantFamilyWithoutPlants.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                return (List<PlantFamily>)serializer.Deserialize(file, typeof(List<PlantFamily>));
            }
        }
    }
}
