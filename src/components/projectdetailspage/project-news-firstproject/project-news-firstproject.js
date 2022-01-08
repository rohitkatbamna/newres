import React from "react";
import Resumepagenavbar from "../../resumepage/resumepage-navbar/resumepage-navbar";
import Projectsidebar from "../project-details-page-sidebar/project-details-page-sidebar";
import { useState } from "react";

function Newsprojectfirst(){
    const [news, setNews] = useState([]);

    function newsFunction(){
        const apikey = 'tiyqI1hdLsc1ID9LMbzyE3I68r7gRC4o';
        fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apikey}`)
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
        <div className="d-flex">
            <Projectsidebar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Click button below To fetch Top Stories from world</h1>
                        <button type="button" className="btn btn-dark" onClick={newsFunction}>Click Me Now</button>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {news.map(newsdata =>
                                {
                                return(
                                    <div>
                                        <h2 className="fw-bold">{newsdata.title}</h2>
                                        <h3>{newsdata.abstract}</h3>
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