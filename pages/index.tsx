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
import Box from "@material-ui/core/Box";
import StackOverflow from "../components/stackOverflow";
import { GetStackOverflowQuestionsByTag } from "../lib/stackOverflow";
import { StackOverflowQuestion } from "../interfaces/stackOverflowQuestion";

const useStyles = makeStyles((theme) => ({
	ctaCards: {
		backgroundColor: theme.palette.common.white,
		paddingTop: 64,
		paddingBottom: 64,
	},
	grey: {
		backgroundColor: theme.palette.grey[100],
		marginTop: "20px",
		marginBottom: "20px",
	},
	white: {
		backgroundColor: theme.palette.common.white,
		paddingTop: "20px",
		paddingBottom: "20px",
	},
}));

export default function Home({
	announcements,
	articles,
	heroBannerData,
	stackOverflowData,
}: {
	announcements: Announcement[];
	heroBannerData: HeroBannerData;
	articles: Article[];
	stackOverflowData: StackOverflowQuestion[];
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

			<Box width={1} className={classes.white}>
				<Container maxWidth="lg" className={classes.white}>
					<StackOverflow questions={stackOverflowData}/>
				</Container>
			</Box>
			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const announcements = await GetTopAnnouncements(3);
	const articles = await GetLatestArticles(4);
	const stackOverflowQuestions: StackOverflowQuestion[] = await GetStackOverflowQuestionsByTag("jss");

	console.log(stackOverflowQuestions);

	const heroBannerData: HeroBannerData = {
		Title: "Sitecore Community",
		SubTitle: "Get up and running quickly",
	};
	return {
		props: {
			announcements: announcements,
			heroBannerData: heroBannerData,
			articles: articles,
			stackOverflowData: stackOverflowQuestions
		},
		revalidate: 1,
	};
};
