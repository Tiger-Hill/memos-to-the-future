import { Link } from "react-router-dom";

const ArticleCard = ({ articleData }) => {
  return (
    <article>
      <h2>{articleData.title}</h2>
      <h3>{articleData.subTitle}</h3>
      <Link to={`article/${articleData.id}`}>
        {/* <div className="image-container"> */}
        <img src={articleData.imageLink} alt="article's image" loading="lazy" />
        {/* </div> */}
      </Link>
      <p>{articleData.reference}</p>
    </article>
  );
}

export default ArticleCard;
