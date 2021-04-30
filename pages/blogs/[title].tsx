import Typography from "@material-ui/core/Typography";
import Footer from "components/footer";
import HeroBanner from "components/heroBanner";
import NavBar from "components/navBar";
import { Blogpost } from "interfaces/blogposts";
import { HeroBannerData } from "interfaces/heroBannerData";
import { GetBlogpostByTitle, GetLatestBlogpostTitles } from "lib/blogposts";
import Head from "next/head";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3rem",
    },
    card: {
        [theme.breakpoints.up('md')]: {
            maxWidth: "50%",
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: "40%",
        },
        maxWidth: "80%",
        padding: "3rem",
        marginTop: "2rem",
    },
}));

export default function Blogs({ blogpost }: { blogpost: Blogpost; }) {
    const classes = useStyles();

    const heroBannerData: HeroBannerData = {
        Title: blogpost.Title,
        SubTitle: "",
    };

    return (
        <div>
            <Head>
                <title>Blogs</title>
            </Head>

            <NavBar />

            <HeroBanner data={heroBannerData} />

            <div className={classes.root}>
                <Paper className={classes.card} elevation={3}>
                    <Typography variant="body2" gutterBottom>
                        <div dangerouslySetInnerHTML={{ __html: blogpost.Body }} />
                    </Typography>
                </Paper>
            </div>
            <Footer />
        </div>

    );
}

export async function getStaticPaths() {
    const paths = await GetLatestBlogpostTitles();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const blogData = await GetBlogpostByTitle(params.title);
    return {
        props: {
            blogpost: blogData,
        },
    };
}
