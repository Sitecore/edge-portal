import Head from 'next/head'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    marginTop: 5,
  },
  paper: {
    height: 140,
    width: 150,
  },
  control: {
    padding: theme.spacing(2),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  gridPadding: {
    padding: 15
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  videoCard: {
    maxWidth: 250
  },
  media: {
    height: 140,
  },
}));

function generateListItems(element: any) {
  return [0, 1, 2, 4, 5, 6].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function CallToActionCards() {
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

function Annoucement() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Annoucment
      </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          It is an annoucment
      </Typography>
        <Typography variant="body2" component="p">
          Here is where I put more info aobut that annoucement.
<br />
        </Typography>
      </CardContent>

    </Card>
  )
}

function LatestNewsAndArticles() {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={5} className={classes.gridPadding}>
      <Grid item xs={9}>
        <Box>
          <Typography variant="h5" component="h1" gutterBottom>
            Latest News
      </Typography>
          <div className={classes.demo}>
            <List>
              {generateListItems(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Typography variant="h5" component="h1" gutterBottom>
            Annoucements
        </Typography>
          <Annoucement />
          <Annoucement />
        </Box>
      </Grid>
    </Grid>
  )
}

function SingleVideo() {
  const classes = useStyles();

  return (
    <Card className={classes.videoCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/play.png"
          title="No Video Here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Video
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Video with video content in it with things people watch in videos.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
                    </Button>
        <Button size="small" color="primary">
          Learn More
                    </Button>
      </CardActions>
    </Card>
  )
}

function ThreeVideoGrid() {
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

  )
}


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

