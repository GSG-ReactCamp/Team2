import React from "react";
import { Link , useParams } from "react-router-dom";
import { Spin } from 'antd';


export default function NewsContent ({content}) {
    const {newsTitle} = useParams();
    console.log(content)
    const myNews = content.filter(content => content.title === newsTitle);
    console.log(myNews[0])

    return(


        <div className="news-content">
        {myNews[0] ? 
            <div>
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

            <p className="text-content">
                {myNews[0].content}
            </p>

            <Link className="src-btn" to={{pathname:`${myNews[0].url}`}} target={"_blank"}>See the origin sourse</Link>
            </div>
            :<Spin size="large"/>
        }
        </div>
    );
}
