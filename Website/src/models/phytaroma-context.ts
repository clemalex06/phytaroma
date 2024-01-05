export interface IPhytaromaContext {
    searchActivated: boolean,
    setSearchActivated: (value: boolean) => void;
    plantFamilyIdValue: string;
    setPlantFamilyIdValue: (id: string) => void;
    plantDetailIdValue: string;
    setPlantDetailIdValue: (id: string) => void;
    searchstring: string;
    setSearchstring: (value: string) => void;
}