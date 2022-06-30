import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { prependOnceListener } from "process";
import type { NextPage } from "next";
import { Banner, CallToAction, EventsPane, Layout } from "../components";


      <main className="w-full px-4 md:px-8 lg:px-20 text-darkAccent">
        <Layout>
          <Banner />
          <EventsPane />
          <CallToAction />
        </Layout>
      </main>
    </div>
  );
};

export default Home;
