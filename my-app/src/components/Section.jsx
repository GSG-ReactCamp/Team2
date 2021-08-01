import React , {useState,useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Card from './Card';
import { BrowserRouter } from 'react-router-dom';

function Section(props){
    const [news, setNews] = useState();
    useEffect(() => {

    const APIKEY = '5c14185759d842e78e5c87ec6dccb171';
    fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${APIKEY}`)
      .then((data) => data.json())
      .then((res) => setNews(res.articles));
  },[]);
  return (
    <BrowserRouter>
    <div className="bigContainer">
        <h2 id={props.title}>{props.title}</h2>
        <div className="sectionContainer">{news && news.slice(0, 3).map((news) => (
           <Card content={news}/>
          ))}
      </div>
    </div>
    </BrowserRouter>
  )
}
export default Section;

