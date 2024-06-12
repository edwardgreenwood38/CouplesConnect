import React from 'react';
// import { Link } from'react';





function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light-bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Couples Connect</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="./RegistrationForm.jsx">Registration</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="./SignIn.jsx">Sign In</a>
                        </li>
                        <li className="nav-item">
                             <a className ="nav-link" href="./events">Event</a> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                               <li><a className="dropdown-item" href="./event/create">Create Event</a></li> 
                               <li><a className="dropdown-item" href="./event/join">Join Event</a></li> 
                               <li><a className="dropdown-item" href="/event/edit">Edit</a></li> 
                            </ul>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="./gallery">Gallery</a> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a className="dropdown-item" href="./gallery/Members">Members</a></li> 
                               <li><a className="dropdown-item" href="./gallery/Match">Match</a></li> 
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;