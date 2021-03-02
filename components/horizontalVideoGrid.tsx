import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import React from 'react';
import { YouTubeVideo } from '../interfaces/youTubeVideo';
import { SingleVideo } from './singleVideo';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height: 600
  },
  gridTile: {
    height: 500
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


export function HorizontalVideoGrid(videos: any) {
  // TODO: Should be able to type ThreeVideoGrid property instead of taking any then typing object inside of method
  const youTubeData: YouTubeVideo[] = videos.videos;

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <p>Cool Playlist Name</p>
      <GridList className={classes.gridList} cols={3.5}>
        {youTubeData?.map(video => (
          <GridListTile key={video.id}  rows={3}>
            <Box m={1} >
              <SingleVideo video={video} />
            </Box>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
