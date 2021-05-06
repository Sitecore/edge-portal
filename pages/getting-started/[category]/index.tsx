import Head from 'next/head';
import { GetStaticProps } from 'next';
import React from 'react';
import NavBar from 'components/navBar';
import Footer from 'components/footer';
import SideNavigation from 'components/sideNavigation';
import HeroBanner from 'components/heroBanner';

import { Box, makeStyles, Container, Grid, Typography } from '@material-ui/core';
import { HeroBannerData } from 'interfaces/heroBannerData';
import { ThreeVideoGrid } from 'components/threeVideoGrid';
import { Categories, Category } from 'interfaces/articles';
import { Section } from 'interfaces/section';
import { GetMenuStructureBySection, GetCategory, GetCategoriesBySection } from 'lib/articles';
import { ParsedUrlQuery } from 'querystring';
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

interface IParams extends ParsedUrlQuery {
	category: string;
}

export default function GettingStarted({
	heroBannerData,
	sectionName,
	categories,
	currentCategory,
}: {
	heroBannerData: HeroBannerData;
	sectionName: string;
	categories: Category[];
	currentCategory: Category;
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
							<DisplayArticle article={currentCategory} />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Container maxWidth="lg" className={classes.grey}>
				<ThreeVideoGrid />
			</Container>

			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { category } = context.params as IParams;

	var section: Section = await GetMenuStructureBySection('Getting Started');
	var currentCategory: Category = await GetCategory('Getting Started', category);

	const heroBannerData: HeroBannerData = {
		Title: currentCategory.Name,
		SubTitle: 'Learn eveything you need to know!',
	};

	return {
		props: {
			heroBannerData: heroBannerData,
			sectionName: section.Name,
			categories: section.Categories.results,
			currentCategory: currentCategory,
		},
		revalidate: 1,
	};
};

export async function getStaticPaths(categories: Categories) {
	categories = await GetCategoriesBySection('Getting Started');

	return {
		paths: categories.results?.map(({ Name }) => `/getting-started/${Name}`) ?? [],
		fallback: false,
	};
}
