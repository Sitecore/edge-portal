import Typography from '@material-ui/core/Typography';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  videoCard: {
    maxWidth: 250
  },
  media: {
    height: 140,
  },
}));


export function SingleVideo() {
  const classes = useStyles();

  return (
    <Card className={classes.videoCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/play.png"
          title="No Video Here" />
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
  );
}
