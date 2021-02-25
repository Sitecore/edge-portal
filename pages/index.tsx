import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import { LatestNewsAndArticles } from '../components/latestNewsAndArticles';
import { CallToActionCards } from '../components/callToActionCards';
import { ThreeVideoGrid } from '../components/threeVideoGrid';

export default function Home() {
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

        <ThreeVideoGrid />
      </Container>
    </div>

  )
}

