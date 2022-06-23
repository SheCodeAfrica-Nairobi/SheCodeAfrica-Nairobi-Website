import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { prependOnceListener } from 'process'
import Banner from "../components/Banner";
import Nav from '../components/Nav';
import EventsPane from '../components/EventsPane'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>She Code Africa Nairobi Chapter</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className="text-darkAccent">
        <Nav />
        <div className="px-5 md:px-8 lg:px-20">
          <Banner />
          <EventsPane/>
        </div>  
      </main>
    </div>
  )
}

export default Home
