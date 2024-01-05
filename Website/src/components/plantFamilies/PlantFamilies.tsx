import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { instance as SearchPlantService } from '../../services/search-plant-service';
import PlantFamily from "../../models/plant-family";
import { IPhytaromaContext } from "../../models/phytaroma-context";

const PlantFamilies: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {

    const plantFamilies = SearchPlantService.getPlantFamilies();

    const onClickWikiphyto = (plantFamily: PlantFamily) => {
        window.open(plantFamily.link, '_blank');
    };

    const onClickPlantFamilyDetail = (plantFamily: PlantFamily) => {
        props.setPlantFamilyIdValue(plantFamily.id);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {'Liste des familles de plantes'}
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
                            <CardActions>
                                <Button size="small" onClick={() => { onClickPlantFamilyDetail(plantFamily) }}>Voir le détail</Button>
                                <Button size="small" onClick={() => { onClickWikiphyto(plantFamily) }}>Ouvrir sur wikiphyto</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PlantFamilies;