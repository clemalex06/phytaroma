export interface IPhytaromaContext {
    searchActivated: boolean,
    setSearchActivated: (id: boolean) => void;
    plantFamilyValue: string;
    setPlantFamilyValue: (id: string) => void;
    plantDetailValue: string;
    setPlantDetailValue: (id: string) => void;
}