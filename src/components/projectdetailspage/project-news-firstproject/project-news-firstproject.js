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
        fetch(`https://api.nytimes.com/svc/topstories/v2/${event.target.value}.json?api-key=${apikey}`)
        .then(response => response.json())
        .then(data => {
            setNews(data.results);
            console.log(news[0].multimedia[0].url);
            }
        );
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
                            <h1>What Kind of News You Want To Fetch ?</h1>
                            <div className="d-flex flex-wrap justify-content-around">
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="world">World</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="us">US</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="business">Business</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="technology">Technology</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="science">Science</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="home">All</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="health">Health</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="travel">Travel</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="theater">Theater</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="books">Books</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="automobiles">Automobiles</button>
                                <button type="button" className="btn btn-dark btn-lg mt-5" onClick={newsFunction} value="sports">Sports</button>

                            </div>
                        </div>
                    </div>
                    <div className="row text-right mt-5">
                        <div className="col-12">
                            {news.map(newsdata =>
                                {
                                return(
                                    <div className="card mt-5 shadow" style={{ borderRadius:'16px'}}>
                                        <div className="card-body">
                                            <h2 className="fw-bold">{newsdata.title}</h2>
                                            <h3>{newsdata.abstract}</h3>
                                        </div>
                                    </div>
                                );
                                })
                            }
                        </div>
                    </div>
                </div>        
            </div>
        </div>
        </>
    );

}

export default Newsprojectfirst;