import React from "react";
import { IPhytaromaContext } from "../models/phytaroma-context";
import { PhytaromaTextResources } from "../resources/phytaroma-text-resources";
import PlantDetail from "../models/plant-detail";
import { instance as SearchPlantService } from "../services/search-plant-service";
import PlantFamily from "../models/plant-family";

export class PhytaromaContextEventHelper {
    static readonly resources = PhytaromaTextResources;

    static initializeContext(): IPhytaromaContext {
        const [searchActivated, setSearchActivated] = React.useState<boolean>(false);
        const [plantFamilyValue, setPlantFamilyValue] = React.useState<string>('');
        const [plantDetailIdValue, setPlantDetailIdValue] = React.useState<string>('');
        const [searchstring, setSearchstring] = React.useState<string>('');
        const phytaromaContext: IPhytaromaContext = {
            searchActivated: searchActivated,
            setSearchActivated: setSearchActivated,
            plantFamilyValue: plantFamilyValue,
            setPlantFamilyIdValue: setPlantFamilyValue,
            plantDetailIdValue: plantDetailIdValue,
            setPlantDetailIdValue: setPlantDetailIdValue,
            searchstring: searchstring,
            setSearchstring: setSearchstring,
        };
        return phytaromaContext;
    }

    static isPlantFamilyValueSelected = (phytaromaContext: IPhytaromaContext) => {
        return phytaromaContext.plantFamilyValue.length !== 0;
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
        return phytaromaContext.searchActivated ?
            'le moteur de recherche inspiré par '
            :
            'PhytAroma est un moteur de recherche intuitif permettant de rechercher'
            + 'de nombreuses plantes utilisées en phytothérapie et Aromathérapie.'
            + 'Il propose une interface facile pour afficher les informations présentes sur ';
    };

    static getPlantDetail(phytaromaContext: IPhytaromaContext): PlantDetail {
        return SearchPlantService.getPlantDetail(phytaromaContext.plantFamilyValue, phytaromaContext.plantDetailIdValue);
    }

    static plantDetailOnClickWikiphyto = (plant: PlantDetail) => {
        window.open(plant.link, '_blank');
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
}