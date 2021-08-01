import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function NewsContent ({content}) {
    const {newsTitle} = useParams();
    
    const myNews = content.filter(content => content.title === newsTitle);
    console.log(myNews[0])

    return(
        <div className="news-content">
            <div >
                <div className="news-header">
                    <h2>{myNews[0].title}</h2>
                <span><Link to="/" className="back-button">back to home {`>>`}</Link></span>
                </div>
                <p className="news-date">{myNews[0].publishedAt}</p>
            </div>

            <p className="news-img">
                <img src={myNews[0].urlToImage} alt=""/>
            </p>

            {/* there is a problem here with the way the content is displayed */}
            <p className="text-content">
                {myNews[0].content}
            </p>

            <a className="src-btn" href={myNews[0].url}>See the origin sourse</a>
            
        </div>
    );
}
