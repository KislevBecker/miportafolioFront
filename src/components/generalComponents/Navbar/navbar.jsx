import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../../images/logo.png';
import './navbar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <p className="navbar-brand text-white" href="#">KBECKS</p>                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <p className="nav-link active" aria-current="page" href="#">Kislev Stephania Becker</p>
                        </li> */}
                        <li className="nav-item" hidden>
                            <p className="nav-link" href="#">Link</p>
                        </li>
                        <li className="nav-item" hidden>
                            <p className="nav-link disabled">Disabled</p>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <label className="me-2 text-white">About Me</label>
                        <label className="me-2 text-white">Skills</label>
                        <label className="me-2 text-white">Projects</label>
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar