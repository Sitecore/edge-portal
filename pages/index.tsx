import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import { LatestNewsAndArticles } from '../components/latestNewsAndArticles';
import { CallToActionCards } from '../components/callToActionCards';
import { ThreeVideoGrid } from '../components/threeVideoGrid';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticProps } from 'next'
import { Announcement } from '../interfaces/announcements'
import { GetTopAnnouncements } from '../lib/announcements'
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const useStyles = makeStyles(() => ({
  title: {
    color: "white",
    paddingBottom: "10px"
  },
  box: {
    backgroundColor: '#424242',
    padding: "5rem",
    borderRadius: "1rem",
    marginTop: "0px"
  }
}));

export default function Home({announcements} : {announcements: Announcement[]}) {
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

        <LatestNewsAndArticles announcements={announcements} />

        <ThreeVideoGrid />
      </Container>
      <Footer />
    </div >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let announcements = await GetTopAnnouncements(3)
  return {
      props: {
          announcements: announcements
      },
      revalidate: 1
  }
}