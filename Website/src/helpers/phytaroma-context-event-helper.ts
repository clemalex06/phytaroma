import React from "react";
import { IPhytaromaContext } from "../models/phytaroma-context";
import { PhytaromaTextResources } from "../resources/phytaroma-text-resources";

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

    static isPlantFamilyValueSelected: (phytaromaContext: IPhytaromaContext) => boolean = (phytaromaContext: IPhytaromaContext) => {
        return phytaromaContext.plantFamilyValue.length !== 0;
    }

    static isPlantDetailSelected: (phytaromaContext: IPhytaromaContext) => boolean = (phytaromaContext: IPhytaromaContext) => {
        return phytaromaContext.plantDetailIdValue.length !== 0;
    }
}