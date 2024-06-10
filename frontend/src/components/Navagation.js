import React from 'react';
import { Link } from 'react-router-dom';



function Navagation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light-bg-light">
            <div className="container-fluid">
                <link className="navbar-brand" to="/">Couples Connect</link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <link className="nav-link" to="/RegistrationForm">Registration</link>
                        </li>
                        <li classname="nav-item">
                            <link className="nav-link" to="/SignIn">Login</link>
                        </li>
                        <li className="nav-item">
                            <link className="nav-link" to="/events">Event</link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><link clasName="dropdown-item" to="/event/create">Create Event</link></li>
                              <li><link clasName="dropdown-item" to="/event/join">Join Event</link></li>
                              <li><link clasName="dropdown-item" to="/event/edit">Edit</link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <link className="nav-link" to="/gallery">Gallery</link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><link className="dropdown-item" to="/gallery/Members">Members</link></li>
                              <li><link className="dropdown-item" to="/gallery/Match">Match</link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navagation;