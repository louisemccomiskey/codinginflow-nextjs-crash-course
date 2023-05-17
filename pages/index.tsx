import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import NewsArticleGrid from "@/components/NewsArticlesGrid";
import { Alert } from "react-bootstrap";

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}

// this code is only run on the server, never on the client.
// therefore this api key is never exposed to the client which is a security risk.
export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", "yO1c4V4Hz4ewtakteVQPhf3z_-U5i0B3gugLQE4Ktr8");
  const response = await fetch(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=IE&topic=news",
    {
      headers: myHeaders,
    }
  );

  const newsResponse: NewsResponse = await response.json();

  return {
    props: { newsArticles: newsResponse.articles },
  };

  // let error go to the 500 page if there is one. OR you could do your try catch things here.
};
//x++jGKL9DB9t7ga
export default function BreakingNewsPage({
  newsArticles,
}: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News - NextJS News App</title>
      </Head>
      <main>
      <Alert>This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request. This allows search engines to crawl the page content and improves SEO</Alert>
        <h1>Breaking News</h1>
        <p>
          This page is an example of server side rendering. Main advanatge of
          server side rnedering is so the page can be properlay indexed.
        </p>
        <p>
          Fetch for client side rendering. For our app we may not need or want
          server side rendering.
        </p>

        <NewsArticleGrid articles={newsArticles} />
      </main>
    </>
  );
}
