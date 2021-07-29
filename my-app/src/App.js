import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContentList from "./components/ContentList";
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
    </div>
  );
}

export default App;
