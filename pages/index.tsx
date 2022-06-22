import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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

      <main className="w-full px-4 md:px-8 lg:px-20">
        <Banner />
      </main>
    </div>
  )
}

export default Home
