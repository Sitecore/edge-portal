import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { SingleVideo } from './singleVideo';

export function ThreeVideoGrid() {
  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <Box m={1}>
            <SingleVideo />
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <SingleVideo />
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <SingleVideo />
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
          </Box>
        </Grid>
      </Grid>
    </Grid>

  );
}
