import React, { useState, useEffect } from 'react'
import {Tracklist} from '../Tracklist/Tracklist'
import './SearchResults.css'

export const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <Tracklist 
                tracks={props.searchResults}
                onAdd={props.onAdd}
                isRemoval={false}/>
        </div>
    )
}