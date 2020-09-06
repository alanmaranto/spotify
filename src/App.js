import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import { useStateValue } from "./context/provider/provider";
import { getTokenFromUrl } from "./spotifyApi";
import { userTypes } from "./context/types/types";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: userTypes.SET_TOKEN,
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((userInfo) => {
        console.log("user", userInfo);
        dispatch({
          type: userTypes.SET_USER,
          user: userInfo,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: userTypes.SET_PLAYLISTS,
          playlists,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
