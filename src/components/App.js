import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchWord = "";

  const endpoints = {
    content: "search",
    tags: "tags",
    sections: "sections",
    editions: "editions", // At current we have editions for the United Kingdom, the United States and Australia.
    singleItem: "technology" // The single item endpoint returns all the data we have for a given single item id. Here the term 'item' refers to either a piece of content, a tag, or a section.
  };

  // The q parameter supports AND (,), OR (|) and NOT (-) operators

  useEffect(() => {
    axios
      .get(
        `https://content.guardianapis.com/${
          endpoints.content
        }?page=1&q=${searchWord}&api-key=${apiKey}`
      )
      .then(result => setApiData(result.data.response.results));
  }, [apiKey, endpoints.content]);

  return (
    <div>
      <h1>The Guardian App</h1>
      <ul>
        {apiData.map(item => (
          <a key={item.id} href={`${item.webUrl}`}>
            <li>{item.webTitle}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default App;
