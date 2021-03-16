import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    title: {
        color: "white",
        paddingBottom: "10px"
    },
    box: {
        backgroundColor: '#424242',
        padding: "5rem",
        borderRadius: "1rem",
        marginTop: "0px"
    },
    footer: {
        backgroundColor: "gray",
        marginTop: "2rem",
        padding: "2rem",
    },
    footerLinkText: {
        color: "white",
        padding: ".3rem"
    },
    footerLink: {
        textDecoration: "none"
    },
    copyright: {
        color: "white",
        paddingTop: "5rem"
    }

}));

export function FooterLink(props: any) {
    const classes = useStyles();

    return (
        <Link href="#">
            <a className={classes.footerLink}>
                <Typography className={classes.footerLinkText} variant="body2" gutterBottom>
                    {props.linkText}
                </Typography>
            </a>
        </Link>
    )
}

export default function Footer() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.footer}>
                <Container maxWidth="md">
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography className={classes.title} variant="h6" gutterBottom>
                                Sitecore Community
                            </Typography>
                            <FooterLink linkText="Sitecore Experience Platform" />
                            <FooterLink linkText="Sitecore Experience Commerce" />
                            <FooterLink linkText="Sitecore Content Hub" />
                            <FooterLink linkText="Sitecore Experience Manager" />
                            <FooterLink linkText="Personalization" />
                            <FooterLink linkText="Marketing Automation" />
                            <FooterLink linkText="Sitecore Omni" />
                            <FooterLink linkText="Sitecore Cortex" />
                            <FooterLink linkText="Integration" />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title} variant="h6" gutterBottom>
                                Knowledge Center
                            </Typography>
                            <FooterLink linkText="Training" />
                            <FooterLink linkText="What is a CMS?" />
                            <FooterLink linkText="Personalization: How to get started?" />
                            <FooterLink linkText="The commerce platform buyer's guide" />
                            <FooterLink linkText="What is a headless CMS?" />
                            <FooterLink linkText="CS101: Mastering Personalization" />
                            <FooterLink linkText="Insights Blog" />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title} variant="h6" gutterBottom>
                                Company
                            </Typography>
                            <FooterLink linkText="News and events" />
                            <FooterLink linkText="Careers" />
                            <FooterLink linkText="Sitecore story" />
                            <FooterLink linkText="Contact us" />
                            <FooterLink linkText="Trust center" />
                        </Grid>
                    </Grid>
                    <Typography className={classes.copyright} variant="body2">
                        © Copyright 2020, Sitecore. All Rights Reserved | Legal | Privacy | Own the Experience® | webmaster@sitecore.net | +1-855-Sitecore
                    </Typography>
                </Container>
            </Box>
        </div>
    )
}
