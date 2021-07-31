import React , {useState,useEffect} from 'react';
import '../App.css';

function Section(props){
    const [news, setNews] = useState();
    useEffect(() => {

    const APIKEY = '6ee32035bd5e430b923efffa01bdfc51';
    fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${APIKEY}`)
      .then((data) => data.json())
      .then((res) => setNews(res.articles));
  },[]);
  return (
    <div className="bigContainer">
        <h2 className="sectionHeader">{props.title}</h2>
        <div className="sectionContainer">{news && news.slice(0, 3).map((news) => (
            <div className="card" key={news.news}>
            <div className="card-header">
              <p>
                <img className="content_img" src={news.urlToImage} alt="" />{" "}
              </p>
            </div>
            <div className="card-body">
              <span className="content_date"> {news.publishedAt} </span>
              <h4 className="content_title">{news.title} </h4>
              <p> {news.description}... </p>
              <a href={news.url}>Read More </a>
            </div>
          </div>
          ))}</div>
    </div>
  )
}
export default Section;

