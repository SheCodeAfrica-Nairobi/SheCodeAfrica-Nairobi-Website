// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let endpoint = `https://www.eventbriteapi.com/v3/organizations/505677108825/events/`;
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer VPYSIEKBBAJJK45JKPWW`,
    },
  };
  const events = (await axios.get(endpoint, config)).data;
  console.log(events.events);

  res.status(200).json(events.events);
}
