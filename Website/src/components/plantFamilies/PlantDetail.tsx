import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { IPhytaromaContext } from "../../models/phytaroma-context";
import { PlantProperty } from "../../models/plant-property";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

const PlantFamilyDetail: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantDetail = PhytaromaContextEventHelper.getPlantDetail(props);

    const GetPropertyDescriptionLine = (description: string, key: string) => {
        return (
            <Typography align="center" color="text.secondary" paragraph key={key}>
                {description}
            </Typography>
        );
    };

    const GetPropertyDetail = (property: PlantProperty) => {
        return (
            <div key={property.name}>
                <Divider>
                    {PhytaromaContextEventHelper.getPropertyNameTranslation(property.name)}
                </Divider>
                {
                    property.content.map((description, index) => {
                        return GetPropertyDescriptionLine(description, property.name + index);
                    })
                }

                {property.content.length === 0 && GetPropertyDescriptionLine(PhytaromaContextEventHelper.resources.plantDetailNoInformation, property.name + "noInformation")}
            </div>
        )
    };

    return (
        <Container maxWidth="md">
            <Typography align="center">
                <Button onClick={() => { PhytaromaContextEventHelper.plantDetailOnClickGoBackAction(props) }}>
                    {props.searchActivated ?
                        PhytaromaContextEventHelper.resources.planDetailGoBackSearchResult :
                        PhytaromaContextEventHelper.resources.planDetailGoBackFamilyPlant}
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