import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // console.log(hash);
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
    spotify.getPlaylist("48ghjEgXkETqYlau0N07M2").then((response) => {
      dispatch({
        type: "MY_SONG",
        MY_SONG: response,
      });
    });
  });

  // console.log(playlists);

  // console.log(user);

  // console.log(token);
  return (
    <div className="App">
      {/* <h1>SPOTIFY CLONE</h1> */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
