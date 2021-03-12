import React from 'react'
import Event from './event/Event.jsx'
import Accordion from '../shared/accordion/Accordion.jsx'
import GHLogo from "../../assets/GitHub-Mark-Light-32px.png"
import LILogo from "../../assets/linkedin-3-16.png"
import "./Home.css"
function Home() {
    const highlight = { "color": "#0f62fe" }
    return (
        <>
            <center>
                <h2>
                    Full stack developer working on web apps using <span style={{ "color": "#61dafb" }}>React</span>/<span style={{ "color": "#4fc08d" }}>Vue</span> and
                    <span style={{ "color": "#43853d" }}> Node</span>.
                </h2>
            </center>
            <Accordion>
                <Event marker>2018</Event>
                <Event>Started work at the Rapid Prototyping Team at  <span style={highlight}>IBM</span></Event>
                <Event>Started BSc Digital Technology Solutions at <span style={highlight}>Exeter University</span></Event>
                <Event marker>2019</Event>
                <Event>Started delivering the Digital Skills Academy, where new hires are introduced to HTML, CSS, JavaScript, and NodeJS.</Event>
                <Event marker>2020</Event>
                <Event>uhhh</Event>
                <Event marker>2021</Event>
                <Event>Remade <a href="https://collwynb.github.io/asteroidsJS/" target="_blank">Asteroids</a> in pure JavaScript</Event>
            </Accordion>

            <center className="links">
                <a href="https://github.com/CollwynB"><img width="16" src={GHLogo} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/collwyn-bevan-4a8893170/"><img src={LILogo} alt="LinkedIn" /></a>
            </center>


        </>
    )
}

export default Home