import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import { LatestNewsAndArticles } from '../components/latestNewsAndArticles';
import { CallToActionCards } from '../components/callToActionCards';
import { ThreeVideoGrid } from '../components/threeVideoGrid';
import { YouTubeVideo } from '../interfaces/youTubeVideo';
import { GetStaticProps } from 'next';

const YOUTUBE_API_KEY = process.env.THOMAS_YOUTUBE_API_KEY;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PL1jJVFm_lGnwKmalgi6sukqDhoYA73JDn&key=${YOUTUBE_API_KEY}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  let youTubeData: YouTubeVideo[] = data.items;

  return {
    props: {
      youTubeData
    }, 
  }
}

export default function Home(props: any) {
  const youTubeData: YouTubeVideo[] = props.youTubeData
  return (
    <div>
      <Head>
      </Head>
      <Container maxWidth="md">

        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Sitecore Community
        </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            Get up and running quickly
        </Typography>
        </Box>

        <CallToActionCards />

        <LatestNewsAndArticles />

        <ThreeVideoGrid videos={youTubeData} />
      </Container>
    </div>

  )
}

