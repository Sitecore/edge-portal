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
import HeroBanner from "../components/heroBanner";
import { HeroBannerData } from "../interfaces/heroBannerData";
import { Article } from "../interfaces/articles";
import { GetLatestArticles } from "../lib/articles";

const useStyles = makeStyles((theme) => ({
	ctaCards: {
		backgroundColor: theme.palette.common.white,
		paddingTop: 64,
		paddingBottom: 64,
	},
	grey: {
		backgroundColor: theme.palette.grey[100],
		marginTop: "20px",
	},
}));

export default function Home({
	announcements,
	articles,
	heroBannerData,
}: {
	announcements: Announcement[];
	heroBannerData: HeroBannerData;
	articles: Article[];
}) {
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
				<LatestNewsAndArticles announcements={announcements} articles={articles} />
				<ThreeVideoGrid />
			</Container>

			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const announcements = await GetTopAnnouncements(3);
	const articles = await GetLatestArticles(4);

	const heroBannerData: HeroBannerData = {
		Title: "Sitecore Community",
		SubTitle: "Get up and running quickly",
	};
	return {
		props: {
			announcements: announcements,
			heroBannerData: heroBannerData,
			articles: articles,
		},
		revalidate: 1,
	};
};
