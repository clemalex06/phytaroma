import plantsData from "../datas/PlantFamiliesWithPlantDetail.min.json";
import PlantCategory from "../models/plant-category";

export class SearchPlantService {

    getPlantCategories():PlantCategory[] {
        return plantsData.map(x => {
            return new PlantCategory(x.Id, x.Name, x.Link);
        });
    }
}

export const instance = new SearchPlantService();