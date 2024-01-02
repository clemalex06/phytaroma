import { IPlantProperty, PlantProperty } from "./plant-property";

export default class PlantDetail {
    public id: string;
    public name: string;
    public link: string;
    public properties: PlantProperty[];

    constructor(id: string, name: string, link: string, properties: IPlantProperty[] | undefined) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.properties = properties ? properties.map(x => {return new PlantProperty(x)}) : [];
    }
}
