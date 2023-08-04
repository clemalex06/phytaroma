import plantsData from "../datas/PlantFamiliesWithPlantDetail.min.json";
import PlantDetail from "../models/plant-detail";
import PlantFamily from "../models/plant-family";

export class SearchPlantService {

    getPlantFamilies(): PlantFamily[] {
        return plantsData.map(x => {
            return new PlantFamily(x.Id, x.Name, x.Link);
        });
    };

    getPlantFamily(familyId: string): PlantFamily {
        const family = plantsData.find(x => x.Id === familyId);
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

    getPlantDetail(familyId: string, plantDetailId: string): PlantDetail {
        let result = new PlantDetail('', '', '');
        const family = plantsData.find(x => x.Id === familyId);
        if (family) {
            const detail = family.Plants.find(x => x.Id === plantDetailId);
            if (detail) {
                result = new PlantDetail(detail.Id, detail.Name, detail.Link);
            }
        }
        return result;
    };
}

export const instance = new SearchPlantService();