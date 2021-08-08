import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import ContentList from "./components/ContentList";
import NewsContent from "./components/NewsContent";
import 'antd/dist/antd.css';
import Section from './components/Section';
import {categoriesData} from './Categories';

require("dotenv").config();
function App() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const apikey = process.env.REACT_APP_UNSPLASH_KEY;
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&language=en&apiKey=${apikey}`
    )
      .then((data) => data.json())
      .then((res) => setContent(res.articles));
  }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <switch>
          <div className="content">
            <Route exact path="/">
              <ContentList content={content} />
            </Route>
          </div>
          <Route path="/newsContent/:newsTitle">
            <NewsContent content={content} />
          </Route>
          <Route exact path="/">
            { categoriesData.map((cat) => <Section category={cat} title={cat.toUpperCase()}/>)}
          </Route>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
