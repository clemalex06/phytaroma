import plantsData from "../datas/PlantFamiliesWithPlantDetail.min.json";
import PlantDetail from "../models/plant-detail";
import PlantFamily from "../models/plant-family";

export class SearchPlantService {

    getPlantFamilies(): PlantFamily[] {
        return plantsData.map(x => {
            return new PlantFamily(x.Id, x.Name, x.Link);
        });
    };

    getPlantFamily(id: string): PlantFamily {
        const family = plantsData.find(x => x.Id === id);
        if (family) {
            const plantFamily = new PlantFamily(family.Id, family.Name, family.Link);
            plantFamily.plants = family.Plants.map(x => {
                return new PlantDetail(x.Id, x.Name, x.Link);
            });

            return plantFamily;
        }
        else {
            return new PlantFamily('', '', '');
        }
    };
}

export const instance = new SearchPlantService();