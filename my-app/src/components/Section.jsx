import React , {useState,useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function Section(props){
    const [news, setNews] = useState();
    useEffect(() => {

    const APIKEY = '5c14185759d842e78e5c87ec6dccb171';
    fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&language=en&apiKey=${APIKEY}`)
      .then((data) => data.json())
      .then((res) => setNews(res.articles));
  },[props.category]);
  return (
    <BrowserRouter>
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
              <Link to={news.url}>Read More </Link>
            </div>
          </div>
          ))}</div>
    </div>
    </BrowserRouter>
  )
}
export default Section;

