import { articlesData } from "../articlesData";
import ArticleCard from "./ArticleCard";

import selectedClientsImg from "../images/selected-clients.jpeg";

const Articles = () => {
  return (
    <div className="article-container">
      {articlesData.map((article, index) => <ArticleCard articleData={article} key={index}/>)}

      <section className="selected-clients">
        <h3>Selected clients:</h3>
        <img src={selectedClientsImg} alt="Logos of the selected clients" />
      </section>
    </div>
  );
}

export default Articles;
