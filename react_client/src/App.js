import React, { useEffect, useState } from "react";
import axios from "axios"; // Axios 사용 시

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch API 사용 시
    // fetch('http://localhost:5000/api/message')
    //   .then(response => response.json())
    //   .then(data => setMessage(data.message));

    // Axios 사용 시
    axios
      .get("http://localhost:5001/api/message")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
