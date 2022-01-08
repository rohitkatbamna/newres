import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faBook, faFilm, faNewspaper, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


function Projectsidebar(){
    return(
        <>
        <div style={{borderRadius:'none',fontFamily:'Roboto, sans-serif'}}>
            <div>
                <div className="card" style={{width:'200px',height:'2000px'}}>
                    <div className="card-body position-fixed" style={{backgroundColor:"#000000",width:'200px',color:'white',height:'2000px'}}>
                        <div>
                            <h6 style={{color:'#E7E7E7'}}>Navigation</h6>
                            <ul style={{listStyle:'none',lineHeight:'2.5em',cursor:'pointer',fontSize:'17px',fontWeight:'900'}}>
                                <Link to='/projects/news' style={{textDecoration:'none',color:'white'}}><li><FontAwesomeIcon icon={faNewspaper} /> News</li></Link>
                                <Link to='/projects/movies' style={{textDecoration:'none',color:'white'}}><li><FontAwesomeIcon icon={faFilm} /> Movies</li></Link>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Projectsidebar;