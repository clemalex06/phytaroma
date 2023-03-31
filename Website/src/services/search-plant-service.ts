import plantsData from "../datas/PlantFamiliesWithPlantDetail.min.json";
import PlantCategory from "../models/plant-category";

export class SearchPlantService {

    getPlantCategories() {
        return plantsData.map(x => {
            new PlantCategory(x.Id, x.Name);
        })
    }
}