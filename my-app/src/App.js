import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContentList from "./components/ContentList";
import Section from './components/Section';
import {categoriesData} from './Categories';

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
  // const categories = ['business','technology','health','sports','science','entertainment'];

  return (
    <div className="App">
      <Header />
      <div className="content">
        <ContentList content={content} />
      </div>
      { categoriesData.map((cat) => <Section category={cat} title={cat.toUpperCase()}/>)}
    </div>
  );
}

export default App;
