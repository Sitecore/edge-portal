import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

export const useStyles = makeStyles((theme) => ({
	paper: {
		color: "white",
		transition: "0.3s",
	},
	promoBox: {
		textAlign: "center",
	},
	promoText: {
		padding: "40px 0px",
		width: "80%",
		display: "inline-grid",
	},
	blue: {
		backgroundColor: theme.palette.primary.blue,
		"&:hover": {
			backgroundColor: theme.palette.secondary.blue,
		},
	},
	teal: {
		backgroundColor: theme.palette.primary.teal,
		"&:hover": {
			backgroundColor: theme.palette.secondary.teal,
		},
	},
	red: {
		backgroundColor: theme.palette.primary.red,
		"&:hover": {
			backgroundColor: theme.palette.secondary.red,
		},
	},
	purple: {
		backgroundColor: theme.palette.primary.purple,
		"&:hover": {
			backgroundColor: theme.palette.secondary.purple,
		},
	},
	padding: {
		paddingBottom: "3px",
		paddingTop: "5px",
	},
	promoCardTitle: {
		fontWeight: "bold",
		paddingTop: "10px",
		paddingBottom: "1rem",
	},
	link: {
		textDecoration: "none",
		"&:hover": {
			transition: "0.3s",
		},
	},
}));

export function CallToActionCards() {
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<Grid container spacing={5}>
				<Grid container item xs={6} sm={3}>
					<Box width="100%" className={classes.promoBox}>
						<Link href="#">
							<a className={classes.link}>
								<Paper className={`${classes.paper} ${classes.red}`} square>
									<div className={classes.promoText}>
										<div>
											<DescriptionIcon fontSize="large" />
										</div>
										<Typography className={classes.promoCardTitle}>Documentation</Typography>
										<Typography variant="caption">Learn more about Sitecore Experience Edge</Typography>
									</div>
								</Paper>
							</a>
						</Link>
					</Box>
				</Grid>
				<Grid container item xs={6} sm={3}>
					<Box width="100%" className={classes.promoBox}>
						<Link href="#">
							<a className={classes.link}>
								<Paper className={`${classes.paper} ${classes.blue}`} square>
									<div className={classes.promoText}>
										<div>
											<GitHubIcon fontSize="large" />
										</div>
										<Typography className={classes.promoCardTitle}>Quick Start</Typography>
										<Typography variant="caption" align="center">
											Let us help you get your first app up and running
										</Typography>
									</div>
								</Paper>
							</a>
						</Link>
					</Box>
				</Grid>
				<Grid container item xs={6} sm={3}>
					<Box width="100%" className={classes.promoBox}>
						<Link href="#">
							<a className={classes.link}>
								<Paper className={`${classes.paper} ${classes.teal}`} square>
									<div className={classes.promoText}>
										<div>
											<GitHubIcon fontSize="large" />
										</div>
										<Typography className={classes.promoCardTitle}>Starter Kits</Typography>
										<Typography variant="caption">Use our examples and try it out yourself</Typography>
									</div>
								</Paper>
							</a>
						</Link>
					</Box>
				</Grid>
				<Grid container item xs={6} sm={3}>
					<Box width="100%" className={classes.promoBox}>
						<Link href="https://mvp.sitecore.com/devportal/edge-doc.html">
							<a className={classes.link}>
								<Paper className={`${classes.paper} ${classes.purple}`} square>
									<div className={classes.promoText}>
										<div>
											<CreateNewFolderIcon fontSize="large" />
										</div>
										<Typography className={classes.promoCardTitle}>What's New</Typography>
										<Typography variant="caption">Read about latest updates in our change log</Typography>
									</div>
								</Paper>
							</a>
						</Link>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
}
