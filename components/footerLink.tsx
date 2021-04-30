import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import React from 'react';
import { FooterLinkData } from 'interfaces/footerLinkData';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
	footerLinkText: {
		color: 'white',
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
}));

export function FooterLink(props: FooterLinkData) {
	const classes = useStyles();

	return (
		<Link href={props.LinkUrl}>
			<a className={classes.footerLink}>
				<Typography className={classes.footerLinkText} variant="body2" gutterBottom>
					{props.LinkText}
				</Typography>
			</a>
		</Link>
	);
}
