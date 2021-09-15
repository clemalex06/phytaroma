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
    }
}
