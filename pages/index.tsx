import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import { LatestNewsAndArticles } from '../components/latestNewsAndArticles';
import { CallToActionCards } from '../components/callToActionCards';
import { ThreeVideoGrid } from '../components/threeVideoGrid';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/navBar';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    color: "white"
  },
  box: {
    backgroundColor: '#424242',
    padding: "5rem",
    borderRadius: "1rem",
    marginTop: "0px"
  },
  footer: {
    backgroundColor: "gray",
    marginTop: "2rem",
    padding: "2rem",
    height: "200px",
  }
}));



export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
      </Head>
      <Container maxWidth="lg">
        <NavBar />
        <Box my={4} className={classes.box}>
          <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
            Sitecore Community
        </Typography>
          <Typography className={classes.title} variant="h5" component="h1" gutterBottom>
            Get up and running quickly
        </Typography>
        </Box>

        <CallToActionCards />

        <LatestNewsAndArticles />

        <ThreeVideoGrid />
      </Container>
      <Box className={classes.footer}>
        <Grid container justify="center" spacing={1}>
          <Grid item md={2} xs={12}>
            Content Here
            </Grid>
              More content over here
            <Grid item sm={10} xs={12}>
          </Grid>
        </Grid>
      </Box>
    </div>

  )
}

