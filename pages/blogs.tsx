import HeroBanner from 'components/heroBanner';
import NavBar from 'components/navBar';
import { HeroBannerData } from 'interfaces/heroBannerData';
import Head from 'next/head';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Box, Container, Grid } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { GetLatestBlogposts } from 'lib/blogposts';
import { GetStaticProps } from 'next';
import { Blogpost } from 'interfaces/blogposts';
import Footer from 'components/footer';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '3rem',
	},
	blogsList: {
		backgroundColor: theme.palette.common.white,
		paddingTop: 64,
		paddingBottom: 64,
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
	},
	header: {
		borderBottom: '1px solid' + theme.palette.grey[300],
	},
	card: {
		minWidth: '75%',
		maxWidth: '90%',
		marginTop: '2rem',
		'&:hover': {
			cursor: 'pointer',
		},
		'&:nth-child(odd)': {
			backgroundColor: theme.palette.grey[200],
		},
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));

export default function Blogs({ blogposts }: { blogposts: Blogpost[] }) {
	const classes = useStyles();

	const heroBannerData: HeroBannerData = {
		Title: 'Blogs',
		SubTitle: 'Find the latest blogs here!',
	};

	return (
		<div>
			<Head>
				<title>Blogs</title>
			</Head>

			<NavBar />

			<HeroBanner data={heroBannerData} />

			<Box className={classes.blogsList}>
				<Container maxWidth="lg">
					<Grid container>
						{blogposts.map(({ Title, Abstract }) => (
							<Link href={`/blogs/${Title}`}>
								<Card className={classes.card} variant="outlined">
									<CardHeader title={Title} className={classes.header} />
									<CardContent>
										<Typography variant="body2" component="h2">
											{Abstract}
										</Typography>
									</CardContent>
									<CardActions>
										<Link href={`/blogs/${Title}`}>
											<Button size="small">Read full post</Button>
										</Link>
									</CardActions>
								</Card>
							</Link>
						))}
					</Grid>
				</Container>
			</Box>
			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const blogposts = await GetLatestBlogposts(4);

	return {
		props: {
			blogposts: blogposts,
		},
	};
};
