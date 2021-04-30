import Head from "next/head";
import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import HeroBanner from "../components/heroBanner";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { HeroBannerData } from "../interfaces/heroBannerData";
import { GetStaticProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import Documentation from '../components/documentation'
import CommunityGuides from '../components/commuinityGuides'
import { GetTopCommunityGuides } from '../lib/communityGuide'
import { CommunityGuide } from '../interfaces/communityGuides'

const useStyles = makeStyles((theme) => ({
	docsList: {
		backgroundColor: theme.palette.grey[100],
		paddingTop: 64,
		paddingBottom: 64,
	},
	grey: {
		backgroundColor: theme.palette.grey[100],
		marginTop: "20px",
	}
}));

export default function Docs({
	heroBannerData,
	communityGuides
}: {
	heroBannerData: HeroBannerData;
	communityGuides: CommunityGuide[];
}) {
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
					<Grid container justify="center" spacing={2}>

						<Documentation />

						<CommunityGuides communityGuides={communityGuides} />

					</ Grid>
				</Container>
			</div>
			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const heroBannerData: HeroBannerData = {
		Title: "Documentation",
		SubTitle: "Learn eveything you need to know!",
	};
	const communityGuides = await GetTopCommunityGuides(4);
	return {
		props: {
			heroBannerData: heroBannerData,
			communityGuides: communityGuides
		},
		revalidate: 1,
	};
};