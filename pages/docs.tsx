import Head from "next/head";
import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

export default function Docs() {
    return (
        <div>
			<Head>
				<title>Documentation</title>
			</Head>

            <NavBar />

			<p>Content in here!</p>

			<Footer />
		</div>
    )
}