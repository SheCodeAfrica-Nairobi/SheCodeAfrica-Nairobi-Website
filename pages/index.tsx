import axios from "axios";
import React, { useEffect } from "react";
import { Banner, Blog, CallToAction, EventsPane, Layout } from "../components";
import posts from '../data/articles';
import eventbrite from "eventbrite";

export default function Home() {
  useEffect(() => {
    async function getEvents() {
      let endpoint = 'https://www.eventbriteapi.com/v3/users/me/events'
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.EVENTBRITE_TOKEN}`
        }
      }
      const events = await (await axios.get(endpoint, config)).data
      console.log(events)
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
