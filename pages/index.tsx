import axios from "axios";
import React, { useEffect, useState } from "react";
import { Banner, Blog, CallToAction, EventsPane, Layout } from "../components";
import posts from '../data/articles';
import eventbrite from "eventbrite";

export default function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function getEvents() {
      const res = await axios.get('/api/events');
      console.log(res?.data?.slice(-5));
      setEvents(res?.data?.slice(-5));
    }
    getEvents();
  }, [])

  return (
    <div>
      <main className="w-full px-4 md:px-8 lg:px-20 text-darkAccent">
        <Layout events={events}>
          <Banner />
          <CallToAction />
          {events.length !== 0 && (
            <EventsPane events={events} />
          )}
          <Blog posts={posts} />
        </Layout>
      </main>
    </div>
  )
}
