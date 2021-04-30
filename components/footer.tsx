import Typography from '@material-ui/core/Typography';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { FooterLink } from './footerLink';

export const useStyles = makeStyles(() => ({
	title: {
		color: 'white',
		paddingBottom: '10px',
		paddingLeft: '.5rem',
	},
	box: {
		backgroundColor: '#424242',
		padding: '5rem',
		borderRadius: '1rem',
		marginTop: '0px',
	},
	footer: {
		backgroundColor: 'gray',
		padding: '2rem',
	},
	footerLinkText: {
		color: 'pink',
		paddingBottom: '.5rem',
		paddingRight: '.5rem',
		paddingLeft: '.5rem',
	},
	footerLink: {
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			textDecorationColor: 'white',
		},
	},
	copyright: {
		color: 'white',
		paddingTop: '5rem',
		display: 'flex',
	},
}));

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
							<FooterLink LinkText="Sitecore Experience Manager" LinkUrl="https://www.sitecore.com/products/experience-manager" />
							<FooterLink LinkText="Personalization" LinkUrl="https://www.sitecore.com/products/sitecore-experience-platform/personalization" />
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
							<FooterLink
								LinkText="Personalization: How to get started?"
								LinkUrl="https://www.sitecore.com/knowledge-center/digital-marketing-resources/personalization-how-do-i-get-started"
							/>
							<FooterLink
								LinkText="The commerce platform buyer's guide"
								LinkUrl="https://www.sitecore.com/knowledge-center/digital-marketing-resources/commerce-platform-buyers-guide"
							/>
							<FooterLink
								LinkText="What is a headless CMS?"
								LinkUrl="https://www.sitecore.com/knowledge-center/digital-marketing-resources/what-is-a-headless-cms"
							/>
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
					<Box className={classes.copyright}>
						<Typography variant="body2">© Copyright 2020, Sitecore. All Rights Reserved |</Typography>
						<FooterLink LinkText="Legal" LinkUrl="https://www.sitecore.com/trust" />
						|
						<FooterLink LinkText="Privacy" LinkUrl="https://www.sitecore.com/trust/privacy-policy" />
						|
						<FooterLink LinkText="Own the Experience®" LinkUrl="https://www.sitecore.com/own-the-experience" />
						|
						<FooterLink LinkText="webmaster@sitecore.net" LinkUrl="mailto:webmaster@sitecore.net" />
						|
						<FooterLink LinkText="+1-855-Sitecore" LinkUrl="tel:+1-855-Sitecore" />
					</Box>
				</Container>
			</Box>
		</div>
	);
}
