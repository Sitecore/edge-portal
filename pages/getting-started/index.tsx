import Head from 'next/head';
import React from 'react';
import NavBar from 'components/navBar';
import Footer from 'components/footer';
import HeroBanner from 'components/heroBanner';
import SideNavigation from 'components/sideNavigation';
import { Box, makeStyles, Container, Grid, Typography } from '@material-ui/core';
import { HeroBannerData } from 'interfaces/heroBannerData';
import { GetStaticProps } from 'next';
import { ThreeVideoGrid } from 'components/threeVideoGrid';
import { GetArticleByName, GetMenuStructureBySection } from 'lib/articles';
import { Article, Category } from 'interfaces/articles';
import { Section } from 'interfaces/section';
import { DisplayArticle } from 'components/displayArticle';

const useStyles = makeStyles((theme) => ({
	docsList: {
		backgroundColor: theme.palette.common.white,
		paddingTop: 64,
		paddingBottom: 64,
	},
	grey: {
		backgroundColor: theme.palette.grey[100],
		marginTop: '20px',
	},
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

export default function GettingStarted({
	heroBannerData,
	sectionName,
	categories,
	content,
}: {
	heroBannerData: HeroBannerData;
	sectionName: string;
	categories: Category[];
	content: Article;
}) {
	const classes = useStyles();

	return (
		<>
			<Head>
				<title>Getting Started</title>
			</Head>

			<NavBar />

			<HeroBanner data={heroBannerData} />

			<Box className={classes.docsList}>
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} md={3}>
							<SideNavigation categories={categories} sectionName={sectionName} sectionSlug="getting-started"></SideNavigation>
						</Grid>
						<Grid item xs={12} md={9}>
							<DisplayArticle article={content} />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const heroBannerData: HeroBannerData = {
		Title: 'Getting Started',
		SubTitle: 'Learn everything you need to know!',
	};

	var section: Section = await GetMenuStructureBySection('Getting Started');
	var content: Article = await GetArticleByName('Getting Started with Edge');

	return {
		props: {
			heroBannerData: heroBannerData,
			sectionName: section.Name,
			categories: section.Categories.results,
			content: content,
		},
		revalidate: 1,
	};
};
