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
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "white"
        }
    },
    copyright: {
        color: "white",
        paddingTop: "5rem"
    }

}));

 interface FooterLinkData {
    LinkUrl: string,
    LinkText: string
}

export function FooterLink(props: FooterLinkData ) {
    const classes = useStyles();

    return (
        <Link href={props.LinkUrl}>
            <a className={classes.footerLink}>
                <Typography className={classes.footerLinkText} variant="body2" gutterBottom>
                    {props.LinkText}
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
                            <FooterLink LinkText="Sitecore Experience Platform" LinkUrl="https://www.sitecore.com/products/sitecore-experience-platform" />
                            <FooterLink LinkText="Sitecore Experience Commerce" LinkUrl="https://www.sitecore.com/products/sitecore-commerce" />
                            <FooterLink LinkText="Sitecore Content Hub" LinkUrl="https://www.sitecore.com/products/content-hub" />
                            <FooterLink LinkText="Sitecore Experience Manager" LinkUrl="https://www.sitecore.com/products/experience-manager"/>
                            <FooterLink LinkText="Personalization" LinkUrl="https://www.sitecore.com/products/sitecore-experience-platform/personalization"/>
                            <FooterLink LinkText="Marketing Automation" LinkUrl="https://www.sitecore.com/products/sitecore-experience-platform/marketing-automation" />
                            <FooterLink LinkText="Sitecore Omni" LinkUrl="https://www.sitecore.com/products/sitecore-experience-platform/headless" />
                            <FooterLink LinkText="Sitecore Cortex" LinkUrl="https://www.sitecore.com/products/sitecore-experience-platform/cortex" />
                            <FooterLink LinkText="Integration" LinkUrl="https://www.sitecore.com/products/connectors" />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title} variant="h6" gutterBottom>
                                Knowledge Center
                            </Typography>
                            <FooterLink LinkText="Training" LinkUrl="https://www.sitecore.com/knowledge-center/getting-started/training" />
                            <FooterLink LinkText="What is a CMS?" LinkUrl="https://www.sitecore.com/knowledge-center/digital-marketing-resources/what-is-a-cms" />
                            <FooterLink LinkText="Personalization: How to get started?" LinkUrl="https://www.sitecore.com/knowledge-center/digital-marketing-resources/personalization-how-do-i-get-started" />
                            <FooterLink LinkText="The commerce platform buyer's guide" LinkUrl="https://www.sitecore.com/knowledge-center/digital-marketing-resources/commerce-platform-buyers-guide" />
                            <FooterLink LinkText="What is a headless CMS?" LinkUrl="https://www.sitecore.com/knowledge-center/digital-marketing-resources/what-is-a-headless-cms" />
                            <FooterLink LinkText="CS101: Mastering Personalization" LinkUrl="https://www.sitecore.com/resources/mastering-personalization/cs-101-home" />
                            <FooterLink LinkText="Insights Blog" LinkUrl="https://www.sitecore.com/knowledge-center/blog" />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title} variant="h6" gutterBottom>
                                Company
                            </Typography>
                            <FooterLink LinkText="News and events" LinkUrl="https://www.sitecore.com/company/news-events" />
                            <FooterLink LinkText="Careers" LinkUrl="https://www.sitecore.com/company/careers" />
                            <FooterLink LinkText="Sitecore story" LinkUrl="https://www.sitecore.com/company/sitecore-story" />
                            <FooterLink LinkText="Contact us" LinkUrl="https://www.sitecore.com/company/contact-us" />
                            <FooterLink LinkText="Trust center" LinkUrl="https://www.sitecore.com/trust" />
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
