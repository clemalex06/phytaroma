import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { instance as SearchPlantService } from '../services/search-plant-service';
import PlantFamily from "../models/plant-family";
import { alignProperty } from "@mui/material/styles/cssUtils";
export default function PlantFamilies() {

    const cards = SearchPlantService.getPlantFamilies();

    const onClickWikiphyto = (plantFamily: PlantFamily) => {
        window.open(plantFamily.link, '_blank');
    }; 
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {cards.map((plantFamily) => (
                    <Grid item key={plantFamily.id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            {/* <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image="http://www.wikiphyto.org/w/images/thumb/3/38/Sylibum_marianumJM.jpg/1200px-Sylibum_marianumJM.jpg"
                                alt="random"
                            /> */}
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {plantFamily.name}
                                </Typography>
                                {/* <Typography>
                                    This is a media card. You can use this section to describe the
                                    content.
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small">Voir le détail</Button>
                                <Button size="small" onClick={() => {onClickWikiphyto(plantFamily)}}>Ouvrir sur wikiphyto</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}