
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { prependOnceListener } from 'process'
import Banner from "../components/Banner";
import Nav from '../components/Nav';
import EventsPane from '../components/EventsPane'
import type { NextPage } from "next";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>She-Codes-Nairobi</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className="w-full px-4 md:px-8 lg:px-20 text-darkAccent">
        <Nav />

        <Banner />
        <EventsPane />

      </main>
    </div >
  );
};

export default Home;
