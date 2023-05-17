// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { NewsResponse } from "@/models/NewsArticles";

// This is a serverless function.
// It's only spinned up when it is needed.
// it is on the server so process env variables will be private and not exposed to the client.

// api_key should be process.Env.NEWS_APP_API_KEY

// This is the BE request doing the call.
// the CLient frontend calls this which calls newscatcher.
// Newscatcher returns it to here - the server
// which returns it back to the client Search call.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();

  console.log(searchQuery, 'searchQuery');

  if (!searchQuery) {
    return res.status(400).json({error: "Please provide a search query"})
  }

  const myHeaders = new Headers();
  myHeaders.append("x-api-key", process.env.NEWS_API_KEY);
  const response = await fetch(
    `https://api.newscatcherapi.com/v2/search?q=${searchQuery}&countries=IE&page_size=100`,
    {
      headers: myHeaders,
    }
  );

  const newsResponse: NewsResponse = await response.json(); 
  res.status(200).json(newsResponse.articles)
}
