import Head from "next/head";
import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import HeroBanner from "../components/heroBanner"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { HeroBannerData } from '../interfaces/heroBannerData'
import { GetStaticProps } from "next";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import ListItemText from '@material-ui/core/ListItemText';
import ForumIcon from '@material-ui/icons/Forum';
import { makeStyles } from "@material-ui/core/styles";
import { ThreeVideoGrid } from "../components/threeVideoGrid";

const useStyles = makeStyles((theme) => ({
	docsList: {
		backgroundColor: theme.palette.common.white,
		paddingTop: 64,
		paddingBottom: 64,
	},
	grey: {
		backgroundColor: theme.palette.grey[100],
		marginTop: "20px",
	},
}));

export default function Docs({ heroBannerData }: { heroBannerData: HeroBannerData }) {
	const classes = useStyles();

	return (
		<div>
			<Head>
				<title>Documentation</title>
			</Head>

			<NavBar />

			<HeroBanner data={heroBannerData} />

			<div className={classes.docsList}>
				<Container maxWidth="lg">
					<Grid container justify="center">
						<Grid item xs={12} md={6}>
							<Typography variant="h5" component="h1" gutterBottom>
								Official Documentation
						</Typography>
							<List>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<DescriptionIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Content Hub
												</React.Fragment>
										}
										secondary="All the documentation for everything Content Hub related"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<DescriptionIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Sitecore XM
											</React.Fragment>
										}
										secondary="All the documentation for everything Sitecore XM related"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<DescriptionIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Sitecore XP
											</React.Fragment>
										}
										secondary="All the documentation for everything Sitecore XP related"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<DescriptionIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Sitecore XC
											</React.Fragment>
										}
										secondary="All the documentation for everything Sitecore XC related"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<DescriptionIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Boxever
											</React.Fragment>
										}
										secondary="All the documentation for everything Boxever related"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<DescriptionIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Four51
											</React.Fragment>
										}
										secondary="All the documentation for everything Four51 related"
									/>
								</ListItem>
							</List>
						</Grid>

						<Grid item xs={12} md={6}>
							<Typography variant="h5" component="h1" gutterBottom>
								Community Guides
						</Typography>
							<List>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<ForumIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Communtiy Guide 1
												</React.Fragment>
										}
										secondary="Check out this community guide!"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<ForumIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Communtiy Guide 2
											</React.Fragment>
										}
										secondary="Check out this community guide!"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<ForumIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Communtiy Guide 3
											</React.Fragment>
										}
										secondary="Check out this community guide!"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<ForumIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Communtiy Guide 4
											</React.Fragment>
										}
										secondary="Check out this community guide!"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<ForumIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Communtiy Guide 5
											</React.Fragment>
										}
										secondary="Check out this community guide!"
									/>
								</ListItem>
								<ListItem button component="a" href="https://google.com" target="_blank" rel="noopener">
									<ListItemIcon>
										<ForumIcon />
									</ListItemIcon>
									<ListItemText
										primary={
											<React.Fragment>
												Communtiy Guide 6
											</React.Fragment>
										}
										secondary="Check out this community guide!"
									/>
								</ListItem>
							</List>
						</Grid>

					</ Grid>

				</Container>
			</div>

			<Container maxWidth="lg" className={classes.grey}>
				<ThreeVideoGrid />
			</Container>

			<Footer />
		</div >
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const heroBannerData: HeroBannerData = {
		Title: 'Documentation',
		SubTitle: 'Learn eveything you need to know!'
	}
	return {
		props: {
			heroBannerData: heroBannerData
		},
		revalidate: 1,
	};
};