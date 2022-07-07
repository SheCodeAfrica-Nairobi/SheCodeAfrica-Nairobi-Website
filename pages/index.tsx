import React from "react";
import { Banner, Blog, CallToAction, EventsPane, Layout } from "../components";


export default function Home() {
  return (
    <div>
      <main className="w-full px-4 md:px-8 lg:px-20 text-darkAccent">
        <Layout>
          <Banner />
          <CallToAction />
          <EventsPane />
          <Blog />
        </Layout>
      </main>
    </div>
  )
}
