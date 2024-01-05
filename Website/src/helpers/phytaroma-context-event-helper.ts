import React from "react";
import { IPhytaromaContext } from "../models/phytaroma-context";
import { PhytaromaTextResources } from "../resources/phytaroma-text-resources";
import PlantDetail from "../models/plant-detail";
import { instance as SearchPlantService } from "../services/search-plant-service";
import PlantFamily from "../models/plant-family";

export class PhytaromaContextEventHelper {
    static readonly resources = PhytaromaTextResources;

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
        const [searchActivated, setSearchActivated] = React.useState<boolean>(false);
        const [plantFamilyIdValue, setPlantFamilyValue] = React.useState<string>('');
        const [plantDetailIdValue, setPlantDetailIdValue] = React.useState<string>('');
        const [searchstring, setSearchstring] = React.useState<string>('');
        const phytaromaContext: IPhytaromaContext = {
            searchActivated: searchActivated,
            setSearchActivated: setSearchActivated,
            plantFamilyIdValue: plantFamilyIdValue,
            setPlantFamilyIdValue: setPlantFamilyValue,
            plantDetailIdValue: plantDetailIdValue,
            setPlantDetailIdValue: setPlantDetailIdValue,
            searchstring: searchstring,
            setSearchstring: setSearchstring,
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
    };

    static getDespcriptionContent(phytaromaContext: IPhytaromaContext): string {
        return phytaromaContext.searchActivated || this.isPlantFamilyValueSelected(phytaromaContext) ?
            this.resources.shortDescriptionLabel
            :
            this.resources.longDescriptionLabel;
    };

    static getPlantDetail(phytaromaContext: IPhytaromaContext): PlantDetail {
        return SearchPlantService.getPlantDetail(phytaromaContext.plantFamilyIdValue, phytaromaContext.plantDetailIdValue);
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
}