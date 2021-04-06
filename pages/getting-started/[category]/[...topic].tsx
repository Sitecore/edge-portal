import Head from "next/head";
import React from "react";
import NavBar from "components/navBar";
import Footer from "components/footer";
import HeroBanner from "components/heroBanner";
import Container from "@material-ui/core/Container";
import SideNavigation from "components/sideNavigation";
import Grid from "@material-ui/core/Grid";
import { HeroBannerData } from "interfaces/heroBannerData";
import { GetStaticProps } from "next";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThreeVideoGrid } from "components/threeVideoGrid";
import { GetMenuStructureBySection, GetArticleByName, GetArticlesByCategory } from "lib/articles";
import { Category, Section, Article } from "interfaces/articles";
import { ParsedUrlQuery } from "querystring";

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
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

interface IParams extends ParsedUrlQuery {
	category: string;
	topic: string;
}

export default function Topic({
	heroBanner,
	sectionName,
	categories,
	article,
}: {
	heroBanner: HeroBannerData;
	sectionName: string;
	categories: Category[];
	article: Article;
}) {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>Getting Started</title>
			</Head>

			<NavBar />

			<HeroBanner data={heroBanner} />

			<div className={classes.docsList}>
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} md={3}>
							<SideNavigation categories={categories} sectionName={sectionName}></SideNavigation>
						</Grid>
						<Grid item xs={12} md={9}>
							<Typography variant="h5" component="h1" gutterBottom>
								{article.Title}
							</Typography>
							<Typography variant="body1" gutterBottom>
								{article.Abstract}
							</Typography>
							<Typography variant="body2" gutterBottom>
								<div dangerouslySetInnerHTML={{ __html: article.Body }} />
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</div>

			<Container maxWidth="lg" className={classes.grey}>
				<ThreeVideoGrid />
			</Container>

			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { category, topic } = context.params as IParams;

	var section: Section = await GetMenuStructureBySection("Getting Started");
	var article: Article = await GetArticleByName("Getting Started", category, topic);

	var heroBannerData: HeroBannerData = {
		Title: "Getting Started",
		SubTitle: "Learn everything you need to know!",
	};

	return {
		props: {
			sectionName: section.Name,
			categories: section.Categories.results,
			article: article,
			heroBanner: heroBannerData,
		},
		revalidate: 1,
	};
};

export async function getStaticPaths(articles: Article[]) {
	articles = await GetArticlesByCategory("Getting Started", "Basics");

	//var section: Section = await GetMenuStructureBySection("Getting Started");

	return {
		paths: articles?.map(({ Name }) => `/getting-started/Basics/${Name}`) ?? [],
		fallback: true,
	};
}
