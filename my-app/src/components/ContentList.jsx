import { Link } from "react-router-dom";
import { Spin } from 'antd';


const ContentList = ({ content }) => {
  return (
    <div className="cards_box">
      {content ?
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
              
              <Link to={`/NewsContent/${content.title}`} >Read More </Link>
            </div>
          </div>
        ))
        : <Spin size="large"/>
      }
    </div>
  );
};

export default ContentList;
