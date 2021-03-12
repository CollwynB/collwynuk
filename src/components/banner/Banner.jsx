import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "./Banner.css"
import SplitString from "../shared/SplitString.jsx"
function Banner() {

    return (
        <div className="banner-container">
            <div className="header-container">
                <h1 className="header"><SplitString classes="title" stagger={.1} >Collwyn's lounge.</SplitString></h1>
            </div>
            {/* {
                window.innerWidth < 1260 || window.innerHeight < 700 ? "" :
                    <div className="banner-tab-container">
                        <NavLink to="/" exact activeClassName="active-tab">
                            <div className="banner-tab">
                                Home
                    </div>
                        </NavLink>

                        <NavLink to="/asteroids" exact activeClassName="active-tab" >
                            <div className="banner-tab" >
                                Asteroids
                    </div>
                        </NavLink>
                    </div>
            } */}
        </div >
    )
}

export default Banner