import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { IPhytaromaContext } from "../../models/phytaroma-context";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

const PlantFamilies: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantFamilies = PhytaromaContextEventHelper.getPlantFamilies();

    return (
        <Container maxWidth="md">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {PhytaromaContextEventHelper.resources.plantFamilyListLabel}
            </Typography>
            <Grid container spacing={4}>
                {plantFamilies.map((plantFamily) => (
                    <Grid item key={plantFamily.id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {plantFamily.name}
                                </Typography>
                            </CardContent>
                            <Typography align="center">
                                <Button size="small" onClick={() => { PhytaromaContextEventHelper.onClickPlantFamilyDetail(props, plantFamily) }}>
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

export default PlantFamilies;