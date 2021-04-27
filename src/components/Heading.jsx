import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Heading = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h3">
          React Audio Player
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Heading;
