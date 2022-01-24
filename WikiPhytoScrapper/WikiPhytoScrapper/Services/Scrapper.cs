using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using WikiPhytoScrapper.Models;

namespace WikiPhytoScrapper.Services
{
    public static class Scrapper
    {
        public const string BaseUrl = "http://www.wikiphyto.org";
        public static async Task<string> CallUrl(string fullUrl)
        {
            HttpClient client = new HttpClient();
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls13;
            client.DefaultRequestHeaders.Accept.Clear();
            var response = client.GetStringAsync(fullUrl);
            return await response;
        }

        public static List<HtmlNode> GetAllRefNode(string html)
        {
            HtmlDocument htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(html);
            var refNodes = new List<HtmlNode>();
            var rootNode = htmlDoc.DocumentNode.Descendants("div")
                    .Where(node => node.GetAttributeValue("id", "").Equals("mw-content-text")).FirstOrDefault();

            if (rootNode != null)
            {
                refNodes = rootNode.Descendants("li")
                    .Where(node => !node.GetAttributeValue("class", "").Contains("tocsection")).ToList();
            }

            return refNodes;
        }

        public static List<PlantFamily> GetPlantFamily(string html)
        {
            var familyLinks = GetAllRefNode(html);

            var family = new List<PlantFamily>();

            var i = 1;

            foreach (var link in familyLinks)
            {
                if (link.FirstChild.Attributes.Count > 0)
                {
                    var plantFamily = new PlantFamily
                    {
                        Id = $"cat{i}",
                        Link = $"{BaseUrl}{link.FirstChild.Attributes[0].Value}",
                        Name = link.FirstChild.InnerText,
                        Plants = new List<Plant>()
                    };

                    family.Add(plantFamily);
                    Console.WriteLine($"          Family Plant Name : {plantFamily.Name}");
                    i++;
                }

            }

            return family;
        }
        public static int GetAllPlantsByFamily(int starIndex, PlantFamily family)
        {
            var html = CallUrl(family.Link).Result;
            var i = starIndex;

            var plantLinks = GetAllRefNode(html);

            foreach (var link in plantLinks)
            {
                if (link.FirstChild.Attributes.Count > 0)
                {
                    var plant = new Plant
                    {
                        Id = $"plant{i}",
                        Link = $"{BaseUrl}{link.FirstChild.Attributes[0].Value}",
                        Name = link.FirstChild.InnerText,
                    };

                    family.Plants.Add(plant);
                    Console.WriteLine($"          Plant Name : {plant.Name}");
                    i++;
                }
            }
            return i;
        }

        public static void GetPlantDetail(int starIndex, PlantFamily family)
        {

        }

        public static void LoadFamilies()
        {
            var sw = Stopwatch.StartNew();
            Console.WriteLine("Start Scrapping WikiPhyto website");
            string url = Scrapper.BaseUrl + "/wiki/Cat%C3%A9gorie:Plantes_m%C3%A9dicinales";
            var responsePagePlantFamily = Scrapper.CallUrl(url).Result;

            Console.WriteLine("");
            Console.WriteLine("Start Scrapping Family Plants List");
            var family = Scrapper.GetPlantFamily(responsePagePlantFamily);
            Console.WriteLine("");
            Console.WriteLine($"Total Family Plants Scrapped : {family.Count}");
            Console.WriteLine("End Scrapping Family Plants List");

            var i = 1;
            var countScrappedPlants = 0;

            foreach (var fam in family)
            {
                Console.WriteLine("");
                Console.WriteLine($"Start Scrapping Plants From Family : {fam.Name}");
                i = Scrapper.GetAllPlantsByFamily(i, fam);
                Console.WriteLine("");
                Console.WriteLine($"Total Plants Scrapped For This Family : {fam.Plants.Count}");
                countScrappedPlants += fam.Plants.Count;
                Console.WriteLine($"End Scrapping Plants From Family : {fam.Name}");
            }

            DataSerializer.Serialize(family, "PlantFamily");

            Console.WriteLine("");
            Console.WriteLine($"Total Family Plants Scrapped : {family.Count}");
            Console.WriteLine($"Total Plants Scrapped : {countScrappedPlants}");
            Console.WriteLine("End Scrapping WikiPhyto Website");
            sw.Stop();
            Console.WriteLine($"Time taken: {sw.Elapsed.TotalMilliseconds}ms");
            Console.ReadLine();
        }

        // Test To retrieve the details of a Plant
        public static void LoadPlantDetail()
        {
            var sw = Stopwatch.StartNew();
            Console.WriteLine("Start Scrapping Plant detail");

            var plant = GetPlantFromId("plant788");

            var idDictionnary = GetHtmlIds();
            var currentList = plant.Properties;

            var responsePagePlantFamily = Scrapper.CallUrl(plant.Link).Result;
            HtmlDocument htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(responsePagePlantFamily);
            //TODO change implementation
            var refNodes = htmlDoc.DocumentNode
                    .Descendants("div")
                    .Where(node => node.GetAttributeValue("id", "").Equals("toc"))
                    .FirstOrDefault()?.Descendants("a").Select(n => n.GetAttributeValue("href", "")).ToList();
            if (refNodes != null)
            {
                foreach (var id in refNodes)
                {
                    if (idDictionnary.ContainsKey(id))
                    {
                        var plantNode = htmlDoc.DocumentNode.Descendants("span")
                            .FirstOrDefault(node => node.GetAttributeValue("id", "").Equals(id.Replace("#", "")))
                            .AncestorsAndSelf("h2").FirstOrDefault();

                        if (plantNode != null)
                        {
                            var plantProperty = new PlantProperty(idDictionnary[id])
                            {
                                Content = new List<string>(),
                            };
                            do
                            {   
                                if (plantNode.Name != "h2")
                                {

                                    var content = plantNode.InnerText
                                        .Split('\n')
                                        .Where( s => !string.IsNullOrWhiteSpace(s))
                                        .Select(p=> RemoveEncodedCharacters(p)).ToList();

                                    plantProperty.Content.AddRange(content);
                                }

                                plantNode = plantNode.NextSibling;
                            } while (plantNode.Name != "h2");

                            plant.Properties.Add(plantProperty);
                        }
                    }
                }

                DataSerializer.Serialize(plant);
                Console.WriteLine("End Scrapping Plant detail");
                sw.Stop();
                Console.WriteLine($"Time taken: {sw.Elapsed.TotalMilliseconds}ms");
                Console.ReadLine();
            }
        }

        private static Dictionary<string, PropertyCategory> GetHtmlIds()
        {
            return new Dictionary<string, PropertyCategory>
            {
                {"#Nom_de_la_plante", PropertyCategory.Name },
                {"#Description_et_habitat", PropertyCategory.Description },
                {"#Histoire_et_tradition", PropertyCategory.History },
                {"#Dosages_usuels", PropertyCategory.Dosis },
                {"#Composition", PropertyCategory.Composition },
                {"#Propri.C3.A9t.C3.A9s", PropertyCategory.HealthProperty },
                {"#Indications", PropertyCategory.Indications },
                {"#Effet_th.C3.A9rapeutique", PropertyCategory.TherapeuticEffects },
                {"#Effets_ind.C3.A9sirables_.C3.A9ventuels_et_pr.C3.A9cautions_d.27emploi", PropertyCategory.UndesirableEffects }
            };
        }

        private static string RemoveEncodedCharacters(string initialstring)
        {
            var regex = new Regex(@"[0-9]*&#93;");
            string result = regex.Replace(initialstring, string.Empty);
            return result
                .Replace("&#91;", string.Empty)
                .Replace("&#160;", string.Empty);
        }

        private static Plant GetPlantFromId(string id)
        {
            var plant = DataSerializer.Deserialize()?
                .Select(p => p.Plants.SingleOrDefault(plant => string.Equals(plant.Id, id)))?
                .Where(p => p != null)?.SingleOrDefault();

            if (plant != null && plant.Properties == null)
            {
                plant.Properties = new List<PlantProperty>();
            }

            if (plant == null)
            {
                plant = new Plant()
                {
                    Id = "plant772",
                    Name = "Valériane",
                    Link = "http://www.wikiphyto.org/wiki/Val%C3%A9riane",
                    Properties = new List<PlantProperty>()
                };
            }

            return plant;

        }
    }
}
