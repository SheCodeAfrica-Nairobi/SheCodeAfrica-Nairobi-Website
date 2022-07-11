import React from "react";
import { Banner, Blog, CallToAction, EventsPane, Layout } from "../components";
import posts from '../data/articles';

export default function Home() {
  return (
    <div>
      <main className="w-full px-4 md:px-8 lg:px-20 text-darkAccent">
        <Layout>
          <Banner />
          <CallToAction />
          <EventsPane />
          <Blog posts={posts} />
        </Layout>
      </main>
    </div>
  )
}
