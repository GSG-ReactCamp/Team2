import { Link } from "react-router-dom";

const ContentList = ({ content }) => {
  return (
    <div className="cards_box">
      {content &&
        content.map((content) => (
          <div className="card" key={content.content}>
            <div className="card-header">
              <p>
                <img className="content_img" src={content.urlToImage} alt="" />{" "}
              </p>
            </div>
            <div className="card-body">
              <span className="content_date"> {content.publishedAt} </span>
              <h4 className="content_title">{content.title} </h4>
              <p> {content.description.substring(0, 200)}... </p>
              {/* 
             todo : pass the data of a specific news from <ContentList /> to <NewsContent />
             */}
              <Link to="/NewsContent" >Read More </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContentList;
