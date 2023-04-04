import { Box, Button, CardContent, CardMedia, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function TopDescription() {
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
                    <Button variant="contained">Nouvelle Recherche</Button>
                    <Button variant="outlined">Revenir à la liste des catégories</Button>
                </Stack>
            </Container>
        </Box>
    );
}