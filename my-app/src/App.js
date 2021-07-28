import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import ContentList from './components/ContentList';

function App() {
 const [content, setContent] = useState()
  useEffect( () => {
    fetch(' https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ee32035bd5e430b923efffa01bdfc51')
    .then(data => data.json())
    .then( res => setContent(res.articles) )
  }, [])

  return (

    <div className="App">
      
      <Header/>
      <div className="content">  
       <ContentList content={content} /> 
      </div>
    </div>
  );
}

export default App;
