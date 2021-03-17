import Head from "next/head";
import Container from "@material-ui/core/Container";
import React from "react";
import { LatestNewsAndArticles } from "../components/latestNewsAndArticles";
import { CallToActionCards } from "../components/callToActionCards";
import { ThreeVideoGrid } from "../components/threeVideoGrid";
import { makeStyles } from "@material-ui/core/styles";
import { GetStaticProps } from "next";
import { Announcement } from "../interfaces/announcements";
import { GetTopAnnouncements } from "../lib/announcements";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import HeroBanner from "../components/heroBanner"
import { HeroBannerData } from '../interfaces/heroBannerData'

const useStyles = makeStyles(() => ({
	title: {
		textAlign: "center",
		color: "white",
	},
	box: {
		backgroundColor: "#424242",
		padding: "5rem",
		borderRadius: "0",
		marginTop: 0,
		marginBottom: 0,
	},
	ctaCards: {
		backgroundColor: "#fff",
		paddingTop: 64,
		paddingBottom: 64,
	},
	grey: {
		backgroundColor: "#f6f6f6",
		marginTop: "20px",
	},
}));

export default function Home({ announcements, heroBannerData }: { announcements: Announcement[], heroBannerData: HeroBannerData }) {
	const classes = useStyles();

	return (
		<div>
			<Head></Head>

			<NavBar />

			<HeroBanner data={heroBannerData} />

			<div className={classes.ctaCards}>
				<Container maxWidth="lg">
					<CallToActionCards />
				</Container>
			</div>

			<Container maxWidth="lg" className={classes.grey}>
				<LatestNewsAndArticles announcements={announcements} />
				<ThreeVideoGrid />
			</Container>

			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const announcements = await GetTopAnnouncements(3);
	const heroBannerData: HeroBannerData = {
		Title: 'Sitecore Community',
		SubTitle: 'Get up and running quickly'
	}
	return {
		props: {
			announcements: announcements,
			heroBannerData: heroBannerData
		},
		revalidate: 1,
	};
};
