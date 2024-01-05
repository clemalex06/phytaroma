import { Link, Typography } from "@mui/material";
import React from "react";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {PhytaromaContextEventHelper.resources.footerCopyright}
      <Link color="inherit" target="_blank" rel="noopener"
        href={PhytaromaContextEventHelper.resources.footerGitHubLink}>
        {PhytaromaContextEventHelper.resources.footerLabelLink}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;