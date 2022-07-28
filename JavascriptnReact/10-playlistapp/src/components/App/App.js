import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [id, name, artist, album],
      playlistName: "New Playlist",
      playlistTracks: [id, name, artist, album],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    let trackId = track.id;

    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === trackId)
    ) {
      return;
    }
  }
  removeTrack(track) {
    let trackId = track.id;

    // use the trackId property to filter it out of playlistTracks
    let newPlaylistTracks = this.state.playlistTracks.filter(
      (savedTrack) => savedTrack.id !== trackId
    );
  }
  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
  }
  savePlaylist() {
    let trackURIs = this.props.playlistTracks.map((track) => track.uri);
  }
  search(term) {
    Spotify.search(term).then((searchResult) => {
      this.setState({ searchResults: searchResult });
    });
    console.log("Searching for", term);
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            {/* <!-- Add a Playlist component --> */}
            <Playlist
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}
