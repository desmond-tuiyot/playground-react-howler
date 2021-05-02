import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";

const Heading = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(2) }}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h3">
          React Audio Player
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Heading;
