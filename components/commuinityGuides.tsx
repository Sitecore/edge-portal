import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import BookIcon from '@material-ui/icons/Book';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { CommunityGuide } from '../interfaces/communityGuides'

const useStyles = makeStyles((theme) => ({
    communityCard: {
        minWidth: 275,
        border: "none",
        boxShadow: "none",
        marginTop: 40,
        marginRight: 15,
        marginLeft: 15,
        position: "relative",
        paddingBottom: "15px",
        overflow: "visible",
        "&:after": {
            display: "block",
            content: "''",
            width: "calc(100% /2)",
            height: "calc(100% /2)",
            position: "absolute",
            top: "-15px",
            left: "-15px",
            borderTop: "15px solid",
            borderLeft: "15px solid",
            borderColor: theme.palette.primary.main,
            pointerEvents: "none",
        }
    },
    link: {
        color: "#000",
        fontWeight: 700,
        fontSize: 17,
        display: "block",
        float: "left",
        clear: "left",
        position: "relative",
        textDecoration: "none",
        letterSpacing: 0.5,
        borderBottom: "none !important",
        marginTop: "5px"
    },
    arrow: {
        verticalAlign: "top",
        marginTop: "4px",
        marginLeft: "5px",
        "-webkit-transition": "all 0.25s",
        transition: "all 0.25s",
        display: "inline-block",
        width: "auto !important",
    },
    author: {
        fontSize: 12,
        marginTop: "2px",
        marginBottom: "2px",
        color: theme.palette.primary.main
    }
}));

export default function CommunityGuides({ communityGuides }: { communityGuides: CommunityGuide[]; }) {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Community Guides
				</Typography>

                <Grid container spacing={2} justify="center">

                    {communityGuides.map(({ Title, Author, Description, Id, Url }) => (
                        <Grid item xs={12} md={6} key={Id}>
                            <Card className={classes.communityCard}>
                                <CardContent>
                                    <Typography variant="h5" component="h5"><BookIcon />{Title}</Typography>
                                    <Typography variant="h6" component="h6" className={classes.author}>{Author}</Typography>
                                    <Typography variant="body2" component="p">{Description}</Typography>
                                    <Typography>
                                        <Link href="https://robearlam.com" color="textPrimary">
                                            <a target="_blank" rel="noopener" className={classes.link} href={`${Url}`}>
                                                Learn more
                                                <img src="/img/icon-arrow.png" className={classes.arrow} />
                                            </a>
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>

            </Grid>
        </>
    );
}