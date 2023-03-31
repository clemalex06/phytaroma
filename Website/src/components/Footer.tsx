import { Box, Typography } from "@mui/material";
import React from "react";
import Copyright from "./Copyright";

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                PhytAroma
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Le moteur de recherche de phytothérapie inspiré par Wikiphyto.
            </Typography>
            <Copyright />
        </Box>
    );
}