import { articlesData } from "../articlesData";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <div className="article-container">
      {articlesData.map(article => <ArticleCard articleData={article}/>)}
    </div>
  );
}

export default Articles;
