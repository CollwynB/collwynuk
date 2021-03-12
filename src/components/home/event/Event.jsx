import React, { useState } from 'react'
import './Event.css'
function Event({ marker, children }) {
    return (
        <div className="event-container" style={marker ? { "fontSize": "24px", "color": "greenyellow" } : {}}>
            {children}
            {marker ? (<div className="marker"></div>) : ""}

        </div>
    )
}

export default Event