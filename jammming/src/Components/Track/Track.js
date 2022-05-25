import React, { useState, useEffect } from 'react'
import './Track.css'

export const Track = (props) => {
    const handleAdd = () => {
        props.onAdd(props.track)
    }

    const handleRemove = () => {
        props.onRemove(props.track)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.name}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            <button className="Track-action" 
                onClick={props.isRemoval ? handleRemove : handleAdd} > 
                    {props.isRemoval ? '-' : '+'}
            </button>
        </div>        
    )
}