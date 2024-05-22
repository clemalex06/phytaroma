import React from "react";
import { IPhytaromaContext } from "../models/phytaroma-context";
import { PhytaromaTextResources } from "../resources/phytaroma-text-resources";
import PlantDetail from "../models/plant-detail";
import { instance as SearchPlantService } from "../services/search-plant-service";
import PlantFamily from "../models/plant-family";

export class PhytaromaContextEventHelper {
    static readonly resources = PhytaromaTextResources;

    static defaultMinSearchStringLength = 4;

    static readonly propertiesNameTranslation: { [key: string]: string } = {
        Name: this.resources.name,
        Description: this.resources.description,
        History: this.resources.history,
        Dosis: this.resources.dosis,
        Composition: this.resources.composition,
        HealthProperty: this.resources.healthProperty,
        Indications: this.resources.indications,
        UndesirableEffects: this.resources.undesirableEffects,
    };

    static initializeContext(): IPhytaromaContext {
        const [searchActivated, setSearchActivated] = React.useState<boolean>(true);
        const [plantFamilyIdValue, setPlantFamilyValue] = React.useState<string>('');
        const [plantDetailIdValue, setPlantDetailIdValue] = React.useState<string>('');
        const [searchstring, setSearchstring] = React.useState<string>('');
        const [plantsResult, setPlantsResult] = React.useState<PlantDetail[]>([]);
        const phytaromaContext: IPhytaromaContext = {
            searchActivated: searchActivated,
            setSearchActivated: setSearchActivated,
            plantFamilyIdValue: plantFamilyIdValue,
            setPlantFamilyIdValue: setPlantFamilyValue,
            plantDetailIdValue: plantDetailIdValue,
            setPlantDetailIdValue: setPlantDetailIdValue,
            searchstring: searchstring,
            setSearchstring: setSearchstring,
            plantsResult: plantsResult,
            setPlantsResult: setPlantsResult
        };
        return phytaromaContext;
    }

    static isPlantFamilyValueSelected = (phytaromaContext: IPhytaromaContext) => {
        return phytaromaContext.plantFamilyIdValue.length !== 0;
    }

    static isPlantDetailSelected: (phytaromaContext: IPhytaromaContext) => boolean = (phytaromaContext: IPhytaromaContext) => {
        return phytaromaContext.plantDetailIdValue.length !== 0;
    }

    static activateNewSearch(phytaromaContext: IPhytaromaContext, value: boolean): void {
        phytaromaContext.setSearchActivated(value);
        phytaromaContext.setPlantDetailIdValue('');
        phytaromaContext.setPlantFamilyIdValue('');
        phytaromaContext.setSearchstring('');
        phytaromaContext.setPlantsResult([]);
    };

    static getDespcriptionContent(phytaromaContext: IPhytaromaContext): string {
        return phytaromaContext.searchActivated || this.isPlantFamilyValueSelected(phytaromaContext) ?
            this.resources.shortDescriptionLabel
            :
            this.resources.longDescriptionLabel;
    };

    static getPlantDetail(phytaromaContext: IPhytaromaContext): PlantDetail {
        return SearchPlantService.getPlantDetail(phytaromaContext.plantDetailIdValue);
    }

    static plantDetailOnClickWikiphyto = (plant: PlantDetail) => {
        window.open(plant.link, '_blank');
    };

    static plantFamilyOnClickWikiphyto = (plantFamily: PlantFamily) => {
        window.open(plantFamily.link, '_blank');
    };

    static plantDetailOnClickGoBackAction = (phytaromaContext: IPhytaromaContext) => {
        phytaromaContext.setPlantDetailIdValue('');
    };

    static getPlantFamilies(): PlantFamily[] {
        return SearchPlantService.getPlantFamilies();
    }

    static onClickPlantFamilyDetail = (phytaromaContext: IPhytaromaContext, plantFamily: PlantFamily) => {
        phytaromaContext.setPlantFamilyIdValue(plantFamily.id);
    };

    static onClickPlantDetail = (phytaromaContext: IPhytaromaContext, plant: PlantDetail) => {
        phytaromaContext.setPlantDetailIdValue(plant.id)
    };

    static getPlantFamily(phytaromaContext: IPhytaromaContext,): PlantFamily {
        return SearchPlantService.getPlantFamily(phytaromaContext.plantFamilyIdValue);
    };

    static getPropertyNameTranslation(propertyName: string): string {
        if (this.propertiesNameTranslation[propertyName]) {
            return this.propertiesNameTranslation[propertyName];
        }
        return propertyName;
    }

    static onClickSearchResult = (phytaromaContext: IPhytaromaContext, searchstring: string) => {
        phytaromaContext.setPlantDetailIdValue('');
        phytaromaContext.setPlantsResult(this.searchPlants(phytaromaContext, searchstring));
    };

    static searchPlants(phytaromaContext: IPhytaromaContext, searchstring: string): PlantDetail[] {
        const result: PlantDetail[] = [];

        if (phytaromaContext.searchActivated && searchstring.length >= PhytaromaContextEventHelper.defaultMinSearchStringLength) {
            phytaromaContext.setSearchstring(searchstring);
            return SearchPlantService.searchPlants(searchstring);
        } else {
            phytaromaContext.setSearchstring('');
        }
        return result;
    };
}