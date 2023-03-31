import { Link, Typography } from "@mui/material";
import React from "react";

export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/clemalex06">
          Suivez moi sur GitHub
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }