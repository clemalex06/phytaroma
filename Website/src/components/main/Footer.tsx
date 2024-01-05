import { Box, Typography } from "@mui/material";
import React from "react";
import Copyright from "./Copyright";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                {PhytaromaContextEventHelper.resources.phytaromaTitle}
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                {PhytaromaContextEventHelper.resources.footerDescription + PhytaromaContextEventHelper.resources.wikiphytoTitle + "."}
            </Typography>
            <Copyright />
        </Box>
    );
}