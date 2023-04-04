import { Link, Typography } from "@mui/material";
import React from "react";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" rel="noopener" href="https://github.com/clemalex06">
        Suivez moi sur GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;