import { AppBar, Toolbar, Typography } from "@mui/material";
import GrassIcon from '@mui/icons-material/Grass';
import React from "react";

export default function NavBar() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <GrassIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    PhytAroma
                </Typography>
            </Toolbar>
        </AppBar>
    );
}