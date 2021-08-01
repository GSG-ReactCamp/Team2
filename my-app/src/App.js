import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import ContentList from "./components/ContentList";
import NewsContent from "./components/NewsContent";



require("dotenv").config();
function App() {
  const [content, setContent] = useState();
  useEffect(() => {
    const apikey = process.env.REACT_APP_UNSPLASH_KEY;
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey}`
    )
      .then((data) => data.json())
      .then((res) => setContent(res.articles));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Route exact path="/">
            <ContentList content={content} />
          </Route>
        </div>
        <Route path="/newsContent/:newsTitle">
          <NewsContent content={content} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
