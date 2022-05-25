import React, { useState, useEffect } from 'react'
import {Tracklist} from '../Tracklist/Tracklist.js'
import './Playlist.css'

export const Playlist = (props) => {
    const handleNameChange = (event) => {
        props.onUpdateName(event.target.value)
    }

    return (
        <div className="Playlist">
            <input value={props.playlistName}
                onChange={handleNameChange}/>
            {/* <!-- Add a TrackList component --> */}
            <Tracklist 
                tracks={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true} />
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}