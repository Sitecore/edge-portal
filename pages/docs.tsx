import Head from "next/head";
import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import HeroBanner from "../components/heroBanner"
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export default function Docs() {
	return (
		<div>
			<Head>
				<title>Documentation</title>
			</Head>

			<NavBar />

			<HeroBanner />

			<Box>
				<Grid container justify="center" spacing={5}>
					<Grid item xs={12} sm={6}>
						<Box>This will be content hub</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box>This will be Community Guides</Box>
					</Grid>
				</Grid>
			</Box>

			<Footer />
		</div>
	)
}