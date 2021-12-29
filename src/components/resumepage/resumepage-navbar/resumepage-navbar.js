import React from "react";
import './resumepage-navbar.css';

function Resumepagenavbar(){
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark resume-page-navbar-everything">
            <div className="container-fluid">
                <a className="navbar-brand resume-page-navbar-brand" href="#"> &#123;dev&#125; <span>Rohit Katbamna</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Resumepagenavbar;
