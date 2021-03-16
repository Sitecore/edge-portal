import Head from "next/head";
import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import HeroBanner from "../components/heroBanner"

export default function Docs() {
    return (
        <div>
			<Head>
				<title>Documentation</title>
			</Head>

            <NavBar />

            <HeroBanner />

			<p>Content in here!</p>

			<Footer />
		</div>
    )
}