import plantsData from "../datas/PlantFamiliesWithPlantDetail.min.json";
import PlantDetail from "../models/plant-detail";
import PlantFamily from "../models/plant-family";
import { IPlantProperty } from "../models/plant-property";
import Fuse from 'fuse.js'

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
                return new PlantDetail(x.Id, x.Name, x.Link, x.Properties as IPlantProperty[]);
            });

            return plantFamily;
        }
        else {
            return new PlantFamily('', '', '');
        }
    };

    getPlantDetail(plantDetailId: string): PlantDetail {
        let result = new PlantDetail('', '', '', undefined);
        const plants = plantsData.map(x => x.Plants)?.reduce((acc, val) => acc.concat(val), []);
        if (plants) {
            const detail = plants.find(x => x.Id === plantDetailId);
            if (detail) {
                result = new PlantDetail(detail.Id, detail.Name, detail.Link, detail.Properties as IPlantProperty[]);
            }
        }
        return result;
    };
    searchPlants(searchstring: string): any[] {
        const plants = plantsData.map(x => x.Plants)?.reduce((acc, val) => acc.concat(val), []);
        const options = {
            includeScore: true,
            keys: ['Properties.Content'],
            threshold: 0.2,
            includeMatches: true
        };

        const fuse = new Fuse(plants, options)
        const resultFuse = fuse.search(searchstring)
        .map(detail =>new PlantDetail(detail.item.Id, detail.item.Name, detail.item.Link, undefined));
        
        return resultFuse;
    }
}

export const instance = new SearchPlantService();