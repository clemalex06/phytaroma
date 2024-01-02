export interface IPlantProperty {
    Name: string;
    Content: string[];
}

export class PlantProperty {
    name: string;
    content: string[];

    constructor(plantProperty: IPlantProperty | undefined) {
        if (!plantProperty) {
            this.name = '';
            this.content = [];
            return;
        }
        this.name = plantProperty.Name;
        this.content = plantProperty.Content;
    }
}
