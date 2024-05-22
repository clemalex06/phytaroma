import PlantDetail from "./plant-detail";

export default class PlantFamily {
    public id: string;
    public name: string;
    public link: string;
    public plants: PlantDetail[];
    constructor(id: string, name: string, link: string) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.plants = [];
    }
}