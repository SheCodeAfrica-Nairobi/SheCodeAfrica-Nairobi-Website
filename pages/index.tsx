import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingValueProposition from '../components/LandingValueProposition'
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>She-Codes-Nairobi</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold text-primary">She-Codes-Nairobi</h1>
        <LandingValueProposition elems={['Learn .','Grow .','Connect.']} typeSpeed={100} backSpeed={100} />
      <main className="w-full px-4 md:px-8 lg:px-20">
        <Banner />
      </main>
    </div>
  )
}

export default Home
