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
import { client } from '../lib/gql'
import { gql } from '@apollo/client'
import { Announcement, AnnouncementId, AnnouncementPrefix } from '../interfaces/announcements'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    color: "white"
  },
  box: {
    backgroundColor: '#424242',
    padding: "5rem",
    borderRadius: "1rem"
  }
}));



export default function Home({announcements} : {announcements: Announcement[]}) {
  const classes = useStyles();
  
  return (
    <div>
      <Head>
      </Head>
      <Container maxWidth="lg">
        <Box my={4} className={classes.box}>
          <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
            Sitecore Community
        </Typography>
          <Typography className={classes.title}  variant="h5" component="h1" gutterBottom>
            Get up and running quickly
        </Typography>
        </Box>

        <CallToActionCards />

        <LatestNewsAndArticles announcements={announcements} />

        <ThreeVideoGrid />
      </Container>
    </div>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<Announcement>({
      query: gql`
      { 
        allM_Content_${AnnouncementId}
        {
          results
          {
            _${AnnouncementPrefix}_Title,
            _${AnnouncementPrefix}_Description,
            _${AnnouncementPrefix}_LinkURL
          }
        }
      }      
      `
  });

  return {
      props: {
          announcements: data[`allM_Content_${AnnouncementId}`].results
      }
  }
}