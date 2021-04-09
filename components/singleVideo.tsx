import Typography from "@material-ui/core/Typography";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { YouTubeVideo } from "../interfaces/youTubeVideo";

const useStyles = makeStyles(() => ({
  videoCard: {
    maxWidth: 250,
  },
  media: {
    height: 140,
  },
}));

export function SingleVideo(video: any) {
  const classes = useStyles();
  const youTubeVideo: YouTubeVideo = video.video;

  return (
    <Card className={classes.videoCard} square variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={youTubeVideo.snippet?.thumbnails.medium.url}
          title={youTubeVideo.snippet?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {youTubeVideo.snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {youTubeVideo.snippet.description}
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
