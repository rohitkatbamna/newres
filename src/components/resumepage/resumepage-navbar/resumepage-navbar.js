import { faDev } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './resumepage-navbar.css';

function Resumepagenavbar(){
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark resume-page-navbar-everything sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand resume-page-navbar-brand">
                    <Link to='/' style={{textDecoration:'none',color:"white"}}>
                        <FontAwesomeIcon icon={faDev} /> 
                        <span className="resume-page-navbar-brand-my-name ms-2">Rohit Katbamna</span>
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' style={{textDecoration:'none'}}><a className="nav-link" aria-current="page" >Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/projects' style={{ textDecoration:'none'}}><a className="nav-link">Projects</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/education' style={{ textDecoration:'none'}}><a className="nav-link">Education</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/work' style={{ textDecoration:'none'}}><a className="nav-link">Work Experience</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/certificates' style={{ textDecoration:'none'}}><a className="nav-link">Certificates</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Resumepagenavbar;
