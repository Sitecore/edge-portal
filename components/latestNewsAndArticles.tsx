import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SingleAnnoucement } from './singleAnnoucement';
import { Announcement } from '../interfaces/announcements'

export const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  gridPadding: {
    padding: 15
  },
  announcements: {
    marginBottom: "25px"
  }
}));

function generateListItems(element: any) {
  return [0, 1, 2, 4, 5, 6].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export function LatestNewsAndArticles({ announcements }: { announcements: Announcement[] }) {
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
                    primary="Single-line item" />
                </ListItem>
              )}
            </List>
          </div>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Typography variant="h5" component="h1" className={classes.announcements} gutterBottom>
            ANNOUCEMENTS
          </Typography>
          
          {announcements.map(({id, _60c6_Title, _60c6_Description, _60c6_LinkURL}) => (
            <SingleAnnoucement key={id} title={_60c6_Title} description={_60c6_Description} linkUrl={_60c6_LinkURL} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
