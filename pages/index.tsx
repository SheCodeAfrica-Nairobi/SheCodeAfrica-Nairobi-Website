import axios from "axios";
import React, { useEffect } from "react";
import { Banner, Blog, CallToAction, EventsPane, Layout } from "../components";
import posts from '../data/articles';
import eventbrite from "eventbrite";

export default function Home() {
  useEffect(() => {
    async function getEvents() {
      const res = await axios.get('/api/events');
      console.log(res.data);
    }
    getEvents();
  }, [])

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

export async function getServersideProps() {

}
