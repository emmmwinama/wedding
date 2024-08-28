import {NavLink} from "react-router-dom";
import React from "react";

function NavBar ()  {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between">
            {/* Nav Brand */}
            <NavLink className="navbar-brand mx-auto d-lg-none sacramento-regular" to="/"
                     style={{fontSize: "30px", fontWeight: "normal"}}>
                Emmanuel <span style={{fontSize: "24px"}}>&#10084;&#65039;</span> Midian
            </NavLink>

            {/* Hamburger on Small Screens */}
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links on Large Screens */}
            <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                <ul className="navbar-nav text-uppercase">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/story">Our Love Journey</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/shower">Bridal Shower</NavLink>
                    </li>
                </ul>

                {/* Centered Nav Brand on Large Screens */}
                <NavLink className="navbar-brand sacramento-regular d-none d-lg-block mx-auto" to="/"
                         style={{fontSize: "48px", fontWeight: 400}}>
                    Emmanuel <span style={{fontSize: "24px"}}>&#10084;&#65039;</span> Midian
                </NavLink>

                <ul className="navbar-nav text-uppercase">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/messages">Messages</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/program">Wedding Program</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;