import React, { useState } from 'react'
import Event from './event/Event.jsx'
import Accordion from '../shared/accordion/Accordion.jsx'
import Showcase from '../showcase/Showcase'
import "./Home.css"
function Home() {
    const [menuClosed, setMenuClosed] = useState(0)
    const highlight = { "color": "#0f62fe" }
    return (
        <>
            <center>
                <h2 className="home-blurb">
                    Full stack developer working on web apps using <span style={{ "color": "#61dafb" }}>React</span>/<span style={{ "color": "#4fc08d" }}>Vue</span> and
                    <span style={{ "color": "#43853d" }}> Node</span>.
                </h2>
            </center>
            <Accordion>
                <Event marker>2018</Event>
                <Event>Started work at the Rapid Prototyping Team at  <span style={highlight}>IBM</span></Event>
                <Event>Started BSc Digital Technology Solutions at <span style={highlight}>Exeter University</span></Event>
                <Event marker>2019</Event>
                <Event>Delivering the Digital Skills Academy, where new hires are introduced to HTML, CSS, JavaScript, and NodeJS.</Event>
                <Event marker>2020</Event>
                <Event>Built an online training platform for the digital skills academy</Event>
                <Event marker>2021</Event>
                <Event>Remade <a href="https://collwynb.github.io/asteroidsJS/" target="_blank">Asteroids</a> in pure JavaScript</Event>
            </Accordion>
            <div className="open-menu" onClick={() => setMenuClosed(!menuClosed)}>
                <div className="work-arrow"></div>
                <div className="work-arrow" style={menuClosed ? {} : { transform: "rotate(45deg) translateX(-8px) translateY(8px)" }}></div>
            </div>
            <div className="my-work" style={{ "right": "-" + 256 * menuClosed + "px" }}>
                <center>
                    <h2 className="home-blurb">My work</h2>
                </center>
                <Showcase></Showcase>
            </div>
            <center className="links">
                <a href="https://github.com/CollwynB" target="_blank"><img width="16" src={"/assets/GitHub-Mark-Light-32px.png"} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/collwyn-bevan-4a8893170/" target="_blank"><img src={"/assets/linkedin-3-16.png"} alt="LinkedIn" /></a>
            </center>


        </>
    )
}

export default Home