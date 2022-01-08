import React from "react";
import Resumepagenavbar from "../../resumepage/resumepage-navbar/resumepage-navbar";
import Projectsidebar from "../project-details-page-sidebar/project-details-page-sidebar";
import { useState } from "react";

function Moviesecondproject(){
    const [searchresults, setSearchresults] = useState('');
    const [movieresultsdata, setMovieresultsdata] = useState([]);
    function handleChange(event){
        setSearchresults(event.target.value)
    }
    function moviesFunction(){
        const apikey = '0j8XaNDAUcl36C945CqLO7tRSCjfEL0T';
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchresults}&api-key=${apikey}`)
        .then(response => response.json())
        .then(data =>
            {
                setMovieresultsdata(data.results)
                console.log(movieresultsdata)
            }
        )

    }
    return(
        <>
        <Resumepagenavbar />
        <div className="d-flex">
            <Projectsidebar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 text-center">
                        <h1>Search Movies</h1>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search Movies" aria-label="" aria-describedby="basic-addon1" onChange={handleChange}/>
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" onClick={moviesFunction}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    {
                    movieresultsdata.map(moviedata =>{
                            return(
                                <div>
                                    <h2 className="fw-bold">{moviedata.display_title}</h2>
                                    <h3>{moviedata.summary_short}</h3>
                                </div>
                            );
                        })
                    }     
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default Moviesecondproject;