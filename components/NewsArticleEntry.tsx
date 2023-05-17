import { NewsArticle } from "@/models/NewsArticles";
import { Card } from "react-bootstrap";

interface NewsArticleEntryProps {
  article: NewsArticle;
}

const NewsArticleEntry = ({
  article: { author, link, title, summary, media },
}: NewsArticleEntryProps) => {
  const validImageUrl =
    media?.startsWith("http://") || media?.startsWith("https://")
      ? media
      : undefined;

  return (
    <a href={link} target="blank">
      <Card className="h-100">
        <Card.Img variant="top" src={validImageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{summary}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewsArticleEntry;
