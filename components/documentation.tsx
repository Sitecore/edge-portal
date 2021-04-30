import React from "react";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    docIcon: {
        color: theme.palette.primary.main
    }
}));


export default function Documentation() {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Official Documentation
				</Typography>
                <List>
                    <ListItem button component="a" href="https://www.sitecore.com/products/content-hub" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <DescriptionIcon className={classes.docIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    Content Hub Product Details
								</React.Fragment>
                            }
                            secondary="Take charge of your entire content lifecycle. Sitecore Content Hub™ unifies content planning, production, collaboration, and management with a single, integrated solution."
                        />
                    </ListItem>
                    <ListItem button component="a" href="https://docs.stylelabs.com/" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <DescriptionIcon className={classes.docIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    Content Hub Documentation
								</React.Fragment>
                            }
                            secondary="All the documentation for everything Content Hub related"
                        />
                    </ListItem>
                    <ListItem button component="a" href="https://docs.stylelabs.com/content/4.0.x/user-documentation/experience-edge/caas-intro.html" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <DescriptionIcon className={classes.docIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    Sitecore Experience Edge for Content Hub
								</React.Fragment>
                            }
                            secondary="All the documentation for everything Sitecore Experience Edge for Content Hub related"
                        />
                    </ListItem>
                    <ListItem button component="a" href="https://docs.stylelabs.com/content/4.0.x/user-documentation/experience-edge/caas-license.html" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <DescriptionIcon className={classes.docIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    Sitecore Experience Edge for Content Hub Licensing
								</React.Fragment>
                            }
                            secondary="Information around what license is required to use Sitecore Experience Edge for Content Hub in your solutions."
                        />
                    </ListItem>
                    <ListItem button component="a" href="https://github.com/Sitecore/edge-portal" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <DescriptionIcon className={classes.docIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    Sitecore Experience Edge Portal
								</React.Fragment>
                            }
                            secondary="The code used to build this site is Open Source, you can view how it was built here."
                        />
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}