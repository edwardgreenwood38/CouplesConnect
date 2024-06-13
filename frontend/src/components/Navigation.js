import {  useContext } from 'react'
import { Link, } from "react-router-dom";
import { CurrentUserContext } from './contexts/CurrentUser';

function Navigation() {

    // const history = useHistory();

    const { currentUser } = useContext(CurrentUserContext);

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <Link to="/SignIn">Sign In</Link>
                
            </li>
            <li style={{ float: 'right' }}>
                <Link to="RegisterForm">Register</Link>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light-bg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Couples Connect</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="./RegistrationForm.jsx">Registration</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="./SignIn.jsx">Sign In</Link>
                        </li>
                        <li className="nav-item dropdown">
                             <Link className ="nav-link dropdown-toggle" to="./events" id="navabarDropdown" role="button" aria-expanded="false">Event</Link> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                               <li><Link className="dropdown-item" to="./event/create">Create Event</Link></li> 
                               <li><Link className="dropdown-item" to="./event/join">Join Event</Link></li> 
                               <li><Link className="dropdown-item" to="/event/edit">Edit</Link></li> 
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                             <Link className="nav-link dropdown-toggle" to="./gallery" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gallery</Link> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><Link className="dropdown-item" to="/gallery/Members">Members</Link></li> 
                               <li><Link className="dropdown-item" to="/gallery/Match">Match</Link></li> 
                            </ul>
                        </li>
                        {loginActions}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;