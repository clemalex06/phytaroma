import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { instance as SearchPlantService } from '../../services/search-plant-service';
import { IPhytaromaContext } from "../../models/phytaroma-context";
import PlantDetail from "../../models/plant-detail";
import { PlantProperty } from "../../models/plant-property";

const PlantFamilyDetail: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantDetail = SearchPlantService.getPlantDetail(props.plantFamilyValue, props.plantDetailIdValue);

    const onClickWikiphyto = (plant: PlantDetail) => {
        window.open(plant.link, '_blank');
    };

    const onClickGoBackAction = () => {
        props.setPlantDetailIdValue('');
    };

    const GetPropertyDescriptionLine = (description: string) => {
        return (
            <Typography align="center" color="text.secondary" paragraph>
                {description}
            </Typography>
        );
    };

    const GetPropertyDetail = (property: PlantProperty) => {
        return (
            <div>
                <Divider>
                    {property.name}
                </Divider>
                {
                    property.content.map((description) => {
                        return GetPropertyDescriptionLine(description);
                    })
                }

                {property.content.length === 0 && GetPropertyDescriptionLine('Aucune information disponible')}
            </div>
        )
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {plantDetail.name}
            </Typography>
            {plantDetail.properties.map((property) => {
                return GetPropertyDetail(property);
            })}
            <Typography align="center">
                <Button onClick={() => { onClickWikiphyto(plantDetail) }}>Ouvrir sur wikiphyto</Button>
                <Button onClick={() => { onClickGoBackAction() }}>Revenir à la famille de cette plante</Button>
            </Typography>
        </Container>
    );
}

export default PlantFamilyDetail;