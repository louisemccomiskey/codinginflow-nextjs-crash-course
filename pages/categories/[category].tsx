import NewsArticleGrid from "@/components/NewsArticlesGrid";
import { NewsArticle, NewsResponse } from "@/models/NewsArticles";
import {GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { isAbsolute } from "path";
import { Alert } from "react-bootstrap";

interface CategoryNewsPageProps {
  newsArticles: NewsArticle[],
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    'news',
    'sport',
    'tech',
    'world',
    'finance',
    'politics',
    'business',
    'economics',
    'beauty',
    'entertainment',
    'travel',
    'music',
    'food',
    'science',
    'gaming',
    'energy'
  ];

  const paths = categorySlugs.map(slug => ({ params: { category: slug }}));
  return {
    paths,
    fallback: false,
  }
};

// get StaticProps in dev mode will fetch on every re-load.
// in production it will only fetch data once when compiling, useful for pages that you know don't need to update often, like blog posts.
// revalidate - prop can be used to increment static regeneration - to tell it to fetch the data again after 5 minutes etc.
export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({params}) => {
  const category = params?.category?.toString();
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", process.env.NEWS_API_KEY);
  const response = await fetch(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=IE&topic=${category}`,
    {
      headers: myHeaders,
    }
  );

  const newsResponse: NewsResponse = await response.json();

  return {
    props: { newsArticles: newsResponse.articles },
    revalidate: 5 * 60, // 
  };
  // let error go to the 500 page if there is one. OR you could do your try catch things here.
}

const CategoryNewsPage = ({newsArticles}: CategoryNewsPageProps) => {
  // we want to add the url path- category as the title of the page.
  // but how can we get that from the url?
  // we use the router hook.

  const router = useRouter();
  const categoryName =  router.query.category?.toString();

  const title = `Category: ${categoryName}`;
  return (
  <>
    <Head>
        <title key="title">{`${title} News APp`}</title>
    </Head>
      <main>
        <Alert>This page uses getStaticProps for very hight loading speed and incremental static regeneration to show data not older than 5 minutes.</Alert>
        <h1>{title}</h1>
        <NewsArticleGrid articles={newsArticles}/>
      </main>
    </>
  );
}
 
export default CategoryNewsPage;

