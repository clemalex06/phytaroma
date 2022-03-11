using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using WikiPhytoScrapper.Models;

namespace WikiPhytoScrapper.Services
{
    public static class DataSerializer
    {
        public static void Serialize(List<PlantFamily> family, string FileName)
        {
            string exeFolder = AppDomain.CurrentDomain.BaseDirectory;
            var outputPath = $"{exeFolder}\\Datas\\{FileName}.json";
            using (StreamWriter outputFile = new StreamWriter(outputPath))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(outputFile, family);
            }
        }

        public static void Serialize(Plant plant)
        {
            string exeFolder = AppDomain.CurrentDomain.BaseDirectory;
            var outputPath = $"{exeFolder}\\Datas\\{plant.Id}.json";
            using (StreamWriter outputFile = new StreamWriter(outputPath))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(outputFile, plant);
            }
        }

        public static List<PlantFamily> Deserialize()
        {
            using (StreamReader file = File.OpenText(@"D:\Dev\phytaroma\WikiPhytoScrapper\WikiPhytoScrapper\Datas\PlantFamily.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                return (List<PlantFamily>)serializer.Deserialize(file, typeof(List<PlantFamily>));
            }
        }
    }
}
