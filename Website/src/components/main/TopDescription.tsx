import { Box, Button, CardMedia, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { IPhytaromaContext } from "../../models/phytaroma-context";

const TopDescription: React.FC<IPhytaromaContext> = (props: IPhytaromaContext) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    PhytAroma
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    {'PhytAroma est un moteur de recherche intuitif permettant de rechercher'
                        + 'de nombreuses plantes utilisées en phytothérapie et Aromathérapie.'
                        + 'Il propose une interface facile pour afficher les informations présentes sur '}
                    <Link color="inherit" target="_blank" rel="noopener" href="http://www.wikiphyto.org/wiki/Accueil">
                        WikiPhyto
                    </Link>.
                </Typography>
                <Box
                    display="flex"
                    bgcolor="white"
                    alignItems="center"
                    justifyContent="center">
                    <CardMedia
                        component="img"
                        src={require('../../assets/img/wikiphyto-logo.png')}
                        sx={{
                            width: '20%'
                        }}
                    />

                </Box>

                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    {props.searchActivated ?
                        <Button variant="outlined" onClick={() => { props.setSearchActivated(false) }}>Revenir à la liste des catégories</Button>
                        : <Button variant="contained" onClick={() => { props.setSearchActivated(true) }}>Nouvelle Recherche</Button>}
                </Stack>
            </Container>
        </Box>
    );
};

export default TopDescription;