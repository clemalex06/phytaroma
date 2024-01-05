import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { instance as SearchPlantService } from '../../services/search-plant-service';
import { IPhytaromaContext } from "../../models/phytaroma-context";
import PlantDetail from "../../models/plant-detail";

const PlantFamilyDetail: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantFamily = SearchPlantService.getPlantFamily(props.plantFamilyValue);

    const onClickWikiphyto = (plant: PlantDetail) => {
        window.open(plant.link, '_blank');
    };

    const onClickPlantFamilyDetail = (plant: PlantDetail) => {
        props.setPlantDetailIdValue(plant.id)
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {plantFamily.name}
            </Typography>
            <Grid container spacing={4}>
                {plantFamily.plants.map((plant) => (
                    <Grid item key={plant.id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {plant.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { onClickPlantFamilyDetail(plant) }}>Voir le détail</Button>
                                <Button size="small" onClick={() => { onClickWikiphyto(plant) }}>Ouvrir sur wikiphyto</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PlantFamilyDetail;