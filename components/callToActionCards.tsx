import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

export const useStyles = makeStyles(() => ({
  paper: {
    height: 180,
    width: 200,
    color: "white",
    textAlign: "center",
  },
  promoText: {
    margin: "auto",
    padding: "10px",
    width: "80%"
  },
  blue: {
    backgroundColor: "#039be5",
    '&:hover': {
      backgroundColor: "#03a9f4"
    }
  },
  green: {
    backgroundColor: "#009688",
    '&:hover': {
      backgroundColor: "#26a69a"
    }
  },
  orange: {
    backgroundColor: "#ff5722",
    '&:hover': {
      backgroundColor: "#ff7043"
    }
  },
  purple: {
    backgroundColor: "#673ab7",
    '&:hover': {
      backgroundColor: "#7e57c2"
    }
  },
  padding: {
    paddingBottom: "3px",
    paddingTop: "5px"
  },
  promoCardTitle: {
    fontWeight: "bold",
    paddingTop: "10px",
    paddingBottom: "1rem"
  },
  link: {
    textDecoration: "none"
  }
}));

export function CallToActionCards() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <Box m={1}>
            <Link href="#">
              <a className={classes.link} >
                <Paper className={`${classes.paper} ${classes.blue}`}>
                  <div className={classes.promoText}>
                    <div>
                      <DescriptionIcon fontSize="large" />
                    </div>
                    <Typography className={classes.promoCardTitle}>Documentation</Typography>
                    <Typography variant="caption" >Learn more about Sitecore Experience Edge</Typography>
                  </div>
                </Paper>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <Link href="#">
              <a className={classes.link} >
                <Paper className={`${classes.paper} ${classes.green}`}>
                  <div className={classes.promoText}>
                    <div>
                      <GitHubIcon fontSize="large" />
                    </div>
                    <Typography className={classes.promoCardTitle}>Quick Start</Typography>
                    <Typography variant="caption" >Let us help you get your first app up and running</Typography>
                  </div>
                </Paper>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <Link href="#">
              <a className={classes.link} >
                <Paper className={`${classes.paper} ${classes.orange}`}>
                  <div className={classes.promoText}>
                    <div>
                      <GitHubIcon fontSize="large" />
                    </div>
                    <Typography className={classes.promoCardTitle}>Starter Kits</Typography>
                    <Typography variant="caption" >Use our examples and  try it out yourself</Typography>
                  </div>
                </Paper>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box m={1}>
            <Link href="https://mvp.sitecore.com/devportal/edge-doc.html">
              <a className={classes.link} >
                <Paper className={`${classes.paper} ${classes.purple}`}>
                  <div className={classes.promoText}>
                    <div>
                      <CreateNewFolderIcon fontSize="large" />
                    </div>
                    <Typography className={classes.promoCardTitle}>What's New</Typography>
                    <Typography variant="caption" >Read about latest updates in our change log</Typography>
                  </div>
                </Paper>
              </a>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
