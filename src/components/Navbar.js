import React from 'react'
import logo from '../logo.png'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className='container'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt='Logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{color:"#fff"}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">about me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
