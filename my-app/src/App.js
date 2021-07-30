import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContentList from "./components/ContentList";
import Section from './components/Section';

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
    <div className="App">
      <Header />
      <div className="content">
        <ContentList content={content} />
      </div>
      <Section category={'business'} title={'BUSINESS'}/>
      <Section category={'technology'} title={'TECHNOLOGY'}/>
      <Section category={'health'} title={'HEALTH'}/>
      <Section category={'sports'} title={'SPORTS'}/>
      <Section category={'science'} title={'SCIENCE'}/>
      <Section category={'entertainment'} title={'ENTERTAINMENT'}/>
    </div>
  );
}

export default App;
