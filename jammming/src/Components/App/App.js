import './App.css';
import React, { useState, useEffect } from 'react'
import {SearchResults} from '../SearchResults/SearchResults'
import {SearchBar} from '../SearchBar/SearchBar'
import {Playlist} from '../Playlist/Playlist'

const App = (props) => {
  const [searchResults, setSearchResults] = useState([
    {
      name: `Simply the Best (from "Schitt's Creek")`,
      artist: `Noah Reed`,
      album: `Simply the Best (from "Schitt's Creek")`,
      uri: 0
    },
    {
      name: "Perfect",
      artist: "Ed Sheeran",
      album: "+ (Plus)",
      uri: 1,
    }
  ])

  const [playlistName, setPlaylistName] = useState("My favourite playlist")

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: `Simply the Best (from "Schitt's Creek")`,
      artist: `Noah Reed`,
      album: `Simply the Best (from "Schitt's Creek")`,
      uri: 0
    },   
  ])

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.uri === track.uri)) {
      return;
    }

    setPlaylistTracks((prev) => {
      return [track, ...prev]
    })
  }

  const removeTrack = (track) => {
    setPlaylistTracks((prev) => {
      return prev.filter((savedTrack) => savedTrack.uri !== track.uri)
    })
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const savePlaylist = () => {
    //Generates array of uri values from the playlistTracks property
    const trackURIs = playlistTracks.map(track => track.uri)
  }

  const search = (searchTerm) => {
    console.log(searchTerm)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults 
            searchResults={searchResults}
            onAdd={addTrack} />
          {/* <!-- Add a Playlist component --> */}
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onUpdateName={updatePlaylistName}
            onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
