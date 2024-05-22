import { AppBar, Toolbar, Typography } from "@mui/material";
import GrassIcon from '@mui/icons-material/Grass';
import React from "react";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

export default function NavBar() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <GrassIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    {PhytaromaContextEventHelper.resources.phytaromaTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}