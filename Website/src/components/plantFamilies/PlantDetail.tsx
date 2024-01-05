import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { IPhytaromaContext } from "../../models/phytaroma-context";
import { PlantProperty } from "../../models/plant-property";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

const PlantFamilyDetail: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantDetail = PhytaromaContextEventHelper.getPlantDetail(props);

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
                    {PhytaromaContextEventHelper.getPropertyNameTranslation(property.name)}
                </Divider>
                {
                    property.content.map((description) => {
                        return GetPropertyDescriptionLine(description);
                    })
                }

                {property.content.length === 0 && GetPropertyDescriptionLine(PhytaromaContextEventHelper.resources.plantDetailNoInformation)}
            </div>
        )
    };

    return (
        <Container maxWidth="md">
            <Typography align="center">
                <Button onClick={() => { PhytaromaContextEventHelper.plantDetailOnClickGoBackAction(props) }}>
                    {PhytaromaContextEventHelper.resources.planDetailGoBackFamilyPlant}
                </Button>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {PhytaromaContextEventHelper.resources.plantDetailLabel + plantDetail.name}
            </Typography>
            <Typography align="center">
                <Button onClick={() => { PhytaromaContextEventHelper.plantDetailOnClickWikiphyto(plantDetail) }}>
                    {PhytaromaContextEventHelper.resources.linkOnWikiphyto}
                </Button>
            </Typography>
            {plantDetail.properties.map((property) => {
                return GetPropertyDetail(property);
            })}
        </Container>
    );
}

export default PlantFamilyDetail;