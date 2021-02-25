import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  paper: {
    height: 140,
    width: 150,
  },
}));

export function CallToActionCards() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <Box m={1}>
            <Paper className={classes.paper}> Documentation</Paper>
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <Paper className={classes.paper}> Quick Start</Paper>
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <Paper className={classes.paper}> Other</Paper>
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <Paper className={classes.paper}> More Other</Paper>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
