import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import { getTokenFromUrl } from "./spotifyApi";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("hash", hash);
  }, [name]);

  return (
    <div className="app">
      {token ? (
        // <Player />
        <h1>I am logged</h1>
      ) : (
        // <Login />
        <Login />
      )}
    </div>
  );
}

export default App;
