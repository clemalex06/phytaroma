using System;
using System.Collections.Generic;
using WikiPhytoScrapper.Services;

namespace WikiPhytoScrapper
{
    public class Program
    {
        public static void Main(string[] args)
        {
            while (ContinueRunning)
            {
                DisplayProgramOptions();
                var userChoice = Console.ReadLine();

                if (!int.TryParse(userChoice, out var options) || !Options.ContainsKey(options))
                {
                    Console.WriteLine(chooseValidOption);
                }
                else
                {
                    if (options == 0)
                    {
                        ContinueRunning = false;
                        Console.WriteLine("The program will finish !!!");
                    }
                    else
                    {
                        var optionChoosen = Options[options];
                        Scrapper.LoadFamilies(optionChoosen.Item2, optionChoosen.Item3);
                    }
                }
            }
        }

        private static void DisplayProgramOptions()
        {
            Console.WriteLine("Please Choose an option to Run : ");
            foreach (var item in Options)
            {
                Console.WriteLine($"{item.Key} => {item.Value.Item1}");
            }
        }

        private static bool ContinueRunning = true;

        private static readonly string chooseValidOption = "Please choose a valid Option !!!";


        private static readonly Dictionary<int, Tuple<string, bool, bool>> Options = new Dictionary<int, Tuple<string, bool, bool>>()
        {
            {
                0,
                new Tuple<string, bool, bool> ("End program", false, false)
            },
            {
                1,
                new Tuple<string, bool, bool> ("Load only Plant Families", false, false)
            },
            {
                2,
                new Tuple<string, bool, bool> ("Load Plant Families with Plant list", true, false)
            },
                        {
                3,
                new Tuple<string, bool, bool> ("Load Plant Families with Plant Detail", true, true)
            },
        };
    }
}
