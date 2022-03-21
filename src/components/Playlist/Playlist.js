import React from "react";
import './playlist.css';
import TrackList from "../Tracklist/Tracklist";

class Playlist extends React.Component {
  render () {
    return (
      <div class="Playlist">
        <input value="New Playlist"/>
        <TrackList />
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist;


