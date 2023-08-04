import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { instance as SearchPlantService } from '../../services/search-plant-service';
import { IPhytaromaContext } from "../../models/phytaroma-context";
import PlantDetail from "../../models/plant-detail";

const PlantFamilyDetail: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantDetail = SearchPlantService.getPlantDetail(props.plantFamilyValue, props.plantDetailValue);

    const onClickWikiphyto = (plant: PlantDetail) => {
        window.open(plant.link, '_blank');
    };

    const onClickGoBackAction = () => {
        props.setPlantDetailValue('');
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {plantDetail.name}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {plantDetail.id}
            </Typography>
            <CardActions>
                <Button size="small" onClick={() => { onClickWikiphyto(plantDetail) }}>Ouvrir sur wikiphyto</Button>
                <Button size="small" onClick={() => { onClickGoBackAction() }}>Revenir à la famille de cette plante</Button>
            </CardActions>
        </Container>
    );
}

export default PlantFamilyDetail;