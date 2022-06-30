import React, { useState } from 'react'
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import EventsPane from '../components/EventsPane'
import Head from 'next/head';
import CallToAction from '../components/CallToAction'


const Home = () => {
	return (
		<>
			<Head>
				<title>She-Codes-Nairobi</title>
			</Head>
			<main className="w-full px-4 md:px-8 lg:px-20 text-darkAccent">
			<Nav />
			<Banner />
			<CallToAction />
			<EventsPane />
			<Footer />
			</main>
		</>
	);
};

export default Home;
