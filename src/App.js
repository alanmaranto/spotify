import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import { getTokenFromUrl } from "./spotifyApi";
import SpotifyWebApi from 'spotify-web-api-js';
import "./App.css";

const spotify = new SpotifyWebApi();


function App() {
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('user', user)
      })
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
