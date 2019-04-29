import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = `51fe8695-2bd2-4c51-a985-5b8867d7dac1`;
  const searchWord = "";

  const endpoints = {
    content: "search",
    tags: "tags",
    sections: "sections",
    editions: "editions", // At current we have editions for the United Kingdom, the United States and Australia.
    singleItem: "technology" // The single item endpoint returns all the data we have for a given single item id. Here the term 'item' refers to either a piece of content, a tag, or a section.
  };

  // The q parameter supports AND (,), OR (|) and NOT (-) operators
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://content.guardianapis.com/${
  //         endpoints.content
  //       }?page=1&q=${searchWord}&api-key=${apiKey}`
  //     )
  //     .then(result => setApiData(result.data.response.results));
  // }, [apiKey, endpoints.content]);

  const handleGetData = () => {
    axios
      .get(
        `https://content.guardianapis.com/${
          endpoints.content
        }?page=1&q=${searchWord}&api-key=${apiKey}`
      )
      .then(result => {
        setApiData(result.data.response.results);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container">
      <h1>The Guardian App</h1>
      <ul>
        {loading ? (
          <p>Press the "Get news" button to display all news</p>
        ) : (
          apiData.map(item => (
            <li className="margin-bottom-s" key={item.id}>
              <a
                href={`${item.webUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.webTitle}
              </a>
            </li>
          ))
        )}
      </ul>
      <button onClick={handleGetData} disabled={!loading ? true : false}>
        Get news
      </button>
    </div>
  );
};

export default App;
