import { useState } from "react";
import { useParams } from "react-router-dom";
import { articlesData } from "../articlesData";

const ArticleShow = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(articlesData.find(article => article.id === Number(id)).showPageContent);

  return (
    <section className="article-show">
      <h2>{articleData.title}</h2>
      {articleData.subText}

      {articleData.fileLinks.map(file => {
        return (
          file.type === "video" && (
            <>
              {file.title && <p className="file-title">{file.title}</p>}
              <iframe
                src={file.link}
                allowFullScreen
                title="video which content matches the article's title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </>
          )
        );
      })}

       {/* <img src={articleData.imageLink} alt="article's image" /> */}
      {/* <p>{articleData.reference}</p> */}
    </section>
  );
}

export default ArticleShow;
