import React, { useState, useEffect } from 'react'
import './SearchBar.css'

export const SearchBar = (props) => {
    const [searchTermState, setSearchTermState] = useState('')

    const search = () => {
        props.onSearch(searchTermState)
    }

    const handleTermChange = (event) => {
        setSearchTermState(event.target.value)
    }

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist"
                onChange={handleTermChange} />
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    )
}