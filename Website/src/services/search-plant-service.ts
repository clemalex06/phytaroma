import plantsData from "../datas/PlantFamiliesWithPlantDetail.min.json";
import PlantFamily from "../models/plant-family";

export class SearchPlantService {

    getPlantFamilies():PlantFamily[] {
        return plantsData.map(x => {
            return new PlantFamily(x.Id, x.Name, x.Link);
        });
    }
}

export const instance = new SearchPlantService();