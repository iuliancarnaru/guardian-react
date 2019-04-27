import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [apiData, setApiData] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`https://content.guardianapis.com/search?api-key=${apiKey}`)
      .then(result => setApiData(result.data));
  }, [apiKey]);

  console.log(apiData);

  return (
    <div>
      <h1>The Guardian App</h1>
    </div>
  );
};

export default App;
