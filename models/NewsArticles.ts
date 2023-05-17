// This is the data structure of the newarticle api that typescript is expecting.
export interface NewsArticle {
  author: string;
  link: string;
  title: string;
  summary: string;
  excerpt: string;
  media?: string;
  published_date: string;
}

export interface NewsResponse {
  articles: NewsArticle[];
}
