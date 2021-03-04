import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import News from "./Components/News/News";
function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=534bea72053649498aa31a369ab63f75"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h2>Total Headlines :{articles.length}</h2>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
}

export default App;
