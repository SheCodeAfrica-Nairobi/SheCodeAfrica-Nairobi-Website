
import React, { useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { Banner, CallToAction, EventsPane, Layout } from "../components";


const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>She-Codes-Africa</title>
			</Head>
			<Layout>
				<Banner />
				<CallToAction />
				<EventsPane />
			</Layout>
		</>
	)
}

export default Home;
