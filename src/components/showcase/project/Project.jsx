import React, { useState } from 'react'
import "./Project.css"
function Project({ side = "", img = "", title = "title not found", children = "description not found", link }) {
    return (
        <div className={"project-card"}>
            <a href={link} target="_blank" rel="noreferrer">

                <div className="overlay">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
                <div className={"project-image"} style={{ "backgroundImage": "url(" + img + ")" }}>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </a>
        </div>
    )
}

export default Project;