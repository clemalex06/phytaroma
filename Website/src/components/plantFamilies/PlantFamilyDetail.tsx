import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { IPhytaromaContext } from "../../models/phytaroma-context";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

const PlantFamilyDetail: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantFamily = PhytaromaContextEventHelper.getPlantFamily(props);

    return (
        <Container maxWidth="md">
            <Typography align="center">
                <Button onClick={() => { PhytaromaContextEventHelper.activateNewSearch(props, false) }}>
                    {PhytaromaContextEventHelper.resources.topDescriptionButtonDisplayFamilyPlant}
                </Button>
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {PhytaromaContextEventHelper.resources.plantFamilyLabel + plantFamily.name}
            </Typography>
            <Typography align="center">
                <Button onClick={() => { PhytaromaContextEventHelper.plantFamilyOnClickWikiphyto(plantFamily) }}>
                    {PhytaromaContextEventHelper.resources.linkOnWikiphyto}
                </Button>
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
                            <Typography align="center">
                                <Button size="small" onClick={() => { PhytaromaContextEventHelper.onClickPlantDetail(props, plant) }}>
                                    {PhytaromaContextEventHelper.resources.viewDetailLabel}
                                </Button>
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PlantFamilyDetail;