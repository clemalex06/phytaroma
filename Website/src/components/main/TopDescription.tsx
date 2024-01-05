import { Box, Button, CardMedia, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { IPhytaromaContext } from "../../models/phytaroma-context";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

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
                    {PhytaromaContextEventHelper.resources.phytaromaTitle}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    {PhytaromaContextEventHelper.getDespcriptionContent(props)}
                    <Link color="inherit" target="_blank" rel="noopener"
                        href={PhytaromaContextEventHelper.resources.topDescriptionWikiphytoLink}>
                        {PhytaromaContextEventHelper.resources.wikiphytoTitle}
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
                        <Button variant="outlined" onClick={
                            () => PhytaromaContextEventHelper.activateNewSearch(props, false)}>
                            {PhytaromaContextEventHelper.resources.topDescriptionButtonDisplayFamilyPlant}
                        </Button>
                        : <Button variant="contained" onClick={
                            () => PhytaromaContextEventHelper.activateNewSearch(props, true)}>
                            {PhytaromaContextEventHelper.resources.topDescriptionButtonNewSearch}
                        </Button>}
                </Stack>
            </Container>
        </Box>
    );
};

export default TopDescription;