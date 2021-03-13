import React, { useState } from 'react'
import Project from "./project/Project.jsx"
import './Showcase.css'
function Showcase() {
    const projects = [
        {
            title: "Asteroids",
            description: "A remake of the classic game 'Asteroids' using HTML Canvas and pure JavaScript. (Does not work on mobile)",
            img: "/assets/asteroids.jpg",
            link: "https://collwynb.github.io/asteroidsJS/"
        },
        {
            title: "Y gog",
            description: "Simple art submission guidelines website for a student run newsletter in north Wales.",
            img: "/assets/y-gog.png",
            link: "https://www.ygog.wales/"
        }
    ]
    return (
        <div className="showcase-container">
            {projects.map(project => {
                return <Project title={project.title} img={project.img} link={project.link} key={project.description}>{project.description} </Project>
            })}
        </div>
    )
}

export default Showcase;