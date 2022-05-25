import React, { useState, useEffect } from 'react'
import {Track} from '../Track/Track'
import './Tracklist.css'

export const Tracklist = (props) => {
    return(
        <div className="TrackList">
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            {props.tracks.map((track) => {
                return <Track
                            track={track} 
                            name={track.name}
                            artist={track.artist}
                            album={track.album}
                            key={track.uri}
                            onAdd={props.onAdd} 
                            onRemove={props.onRemove}
                            isRemoval={props.isRemoval} />
            })}
        </div>
    )    
}
