import Head from "next/head";
import React from "react";
import NavBar from "components/navBar";
import Footer from "components/footer";
import HeroBanner from "components/heroBanner";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { HeroBannerData } from "interfaces/heroBannerData";
import { GetStaticProps } from "next";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThreeVideoGrid } from "components/threeVideoGrid";
import { GetMenuStructureBySection, GetArticleByName, GetArticlesByCategory } from "lib/articles";
import { Section } from "lib/interfaces";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Category, Articles, Article } from "interfaces/articles";
import Link from "next/link";

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

export default function Topic({
	heroBannerData,
	sectionName,
	categories,
	article,
}: {
	heroBannerData: HeroBannerData;
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

			<HeroBanner data={heroBannerData} />

			<div className={classes.docsList}>
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} md={3}>
							<List
								component="nav"
								aria-labelledby="nested-list-subheader"
								subheader={
									<ListSubheader component="div" id="nested-list-subheader">
										{sectionName}
									</ListSubheader>
								}
								className={classes.root}>
								{categories.map(({ CategoryName, Topics }) => (
									<React.Fragment>
										<ListItem button>
											<Link href={`/getting-started/${encodeURIComponent(CategoryName)}`}>
												<ListItemText primary={CategoryName} />
											</Link>
										</ListItem>
										<List component="div" disablePadding>
											{Topics.results.map(({ Name }) => (
												<ListItem button className={classes.nested}>
													<Link href={`/getting-started/${encodeURIComponent(CategoryName)}/${encodeURIComponent(Name)}`}>
														<ListItemText primary={Name} />
													</Link>
												</ListItem>
											))}
										</List>
									</React.Fragment>
								))}
							</List>
						</Grid>
						<Grid item xs={12} md={9}>
							<Typography variant="h5" component="h1" gutterBottom>
								{article.Name}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const heroBannerData: HeroBannerData = {
		Title: "Getting Started",
		SubTitle: "Learn eveything you need to know!",
	};

	var section: Section = await GetMenuStructureBySection("Getting Started");
	var article: Article = await GetArticleByName("Getting Started", params.category, params.topic);

	return {
		props: {
			heroBannerData: heroBannerData,
			sectionName: section.Name,
			categories: section.Categories.results,
			article: article,
		},
		revalidate: 1,
	};
};

export async function getStaticPaths(articles: Articles) {
	articles = await GetArticlesByCategory("Getting Started", "Basics");
	//var section: Section = await GetMenuStructureBySection("Getting Started");

	return {
		paths: articles.results?.map(({ Name }) => `/getting-started/Basics/${Name}`) ?? [],
		fallback: true,
	};
}
