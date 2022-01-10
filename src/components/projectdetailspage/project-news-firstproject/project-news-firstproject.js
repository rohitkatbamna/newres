import React from "react";
import Resumepagenavbar from "../../resumepage/resumepage-navbar/resumepage-navbar";
import Projectsidebar from "../project-details-page-sidebar/project-details-page-sidebar";
import { useState } from "react";
import Mobilesidebarproject from "../project-details-page-mobile-sidebar/project-details-page-mobile-sidebar";
import './project-news-firstproject.css';

function Newsprojectfirst(){
    const [news, setNews] = useState([]);

    function newsFunction(event){
        const apikey = 'tiyqI1hdLsc1ID9LMbzyE3I68r7gRC4o';
        console.log(event.target.attributes.value.nodeValue)
    }
    return(
        <>
        <Resumepagenavbar />
        <div className="project-sidebar-mobile"><Mobilesidebarproject /></div>
        <div className="d-flex">
            <div className="project-sidebar-desktop"><Projectsidebar /></div>
            <div className="container-fluid card">
                <div className="card-body">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1>Click button below To fetch Top Stories from world</h1>
                            <button type="button" className="btn btn-dark" onClick={newsFunction} value="world">World</button>
                        </div>
                    </div>


                </div>        
            </div>
        </div>
        </>
    );

}

export default Newsprojectfirst;