import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import { LatestNewsAndArticles } from '../components/latestNewsAndArticles';
import { CallToActionCards } from '../components/callToActionCards';
import { ThreeVideoGrid } from '../components/threeVideoGrid';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
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
  logoImage: {
    maxWidth: "200px"
  },
  appBar: {
    backgroundColor: "white",
    margin: "0px",
  },
  navBarLink: {
    color: "#9e9e9e",
    padding: "10px",
    '&:hover': {
      color: "#616161"
    }
  },
  gridItem: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row"
    },
  },
  navLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
    },
  },
  link: {
    textDecoration: "none",
  }
}));



export default function Home() {

  const classes = useStyles();


  return (
    <div>
      <Head>
      </Head>
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={1} className={classes.appBar}>
          <Grid item md={2} xs={12} className={classes.navLogo}>
            <Image src="/images/sitecore_logo.svg" width={200} height={100} />
          </Grid>
          <Grid item sm={10} xs={12} className={classes.gridItem}>
            <Link href="#">
              <a className={classes.link}>
                <Typography className={classes.navBarLink} variant="h6" component="h1" gutterBottom>
                  Getting Started
              </Typography>
              </a>
            </Link>
            <Link href="#">
              <a className={classes.link}>
                <Typography className={classes.navBarLink} variant="h6" component="h1" gutterBottom>
                  Resources
              </Typography>
              </a>
            </Link>
            <Link href="#">
              <a className={classes.link}>
                <Typography className={classes.navBarLink} variant="h6" component="h1" gutterBottom>
                  Docs
              </Typography>
              </a>
            </Link>
            <Link href="#">
              <a className={classes.link}>
                <Typography className={classes.navBarLink} variant="h6" component="h1" gutterBottom>
                  Community
              </Typography>
              </a>
            </Link>
            <Link href="#">
              <a className={classes.link}>
                <Typography className={classes.navBarLink} variant="h6" component="h1" gutterBottom>
                  Blog
              </Typography>
              </a>
            </Link>
          </Grid>
        </Grid>
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
    </div>

  )
}

