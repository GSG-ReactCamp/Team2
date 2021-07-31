import { Link } from "react-router-dom";


// these are dummy & static data, I made them when I was work on routing, so I know if the code is correct or not, in addition to making some style for the page and real data when they rendered.
// I searched a lot but could not find how to pass the data of a specific news from <ContentList /> to <NewsContent /> via <Link />
// this code want editting & responsive style

const NewsContent = () => {
    return(
        <div className="news-content">
            <div >
                <div className="news-header">
                    <h2>Russia stops Cubans trying to enter EU on air beds</h2>
                <span><Link to="/" className="back-button">back to home {`>>`}</Link></span>
                </div>
                <p className="news-date">2021-07-31T00:22:20</p>
            </div>

            <p className="news-img">
                <img src="https://ichef.bbci.co.uk/news/1024/branded_news/103B6/production/_119668466_narvagetty.jpg" alt=""/>
            </p>

            <p className="text-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odit eos optio quaerat cumque amet asperiores est, dignissimos nisi nulla error aliquid inventore at ipsa blanditiis fugit illum earum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, porro laudantium unde quasi corporis quisquam deserunt placeat rem tenetur iusto dicta voluptatibus molestiae cum consequatur dolorem optio modi corrupti impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, accusantium accusamus laborum magnam sint nam dignissimos ipsam inventore molestias veritatis nobis quam quaerat quibusdam similique. Aliquid minima similique ex dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus nobis perferendis nisi pariatur vero qui, tenetur ut eligendi fuga dicta, officia odio enim error quia veniam debitis? Impedit, et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, illo accusantium soluta debitis molestias suscipit aut qui odit nostrum doloribus dolores. Consectetur, soluta. Earum, dolore excepturi! Vel consequatur dolores possimus.
            </p>

            <a className="src-btn" href="http://www.bbc.co.uk/news/world-europe-58033042">See the origin sourse</a>
            
        </div>
    );
}

export default NewsContent;
