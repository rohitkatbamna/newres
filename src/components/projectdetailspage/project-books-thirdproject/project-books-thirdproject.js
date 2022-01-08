import React from "react";
import Resumepagenavbar from "../../resumepage/resumepage-navbar/resumepage-navbar";
import Projectsidebar from "../project-details-page-sidebar/project-details-page-sidebar";
import { useState } from "react";

function Bookthirdproject(){
    const [searchresults, setSearchresults] = useState('');
    const [bookresultsdata, setBookresultsdata] = useState([]);
    function handleChange(event){
        setSearchresults(event.target.value)
    }
    function booksFunction(){
        const apikey = 'tiyqI1hdLsc1ID9LMbzyE3I68r7gRC4o';
        fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${searchresults}&api-key=${apikey}`)
        .then(response => response.json())
        .then(data =>
            {
                setBookresultsdata(data)
                console.log(bookresultsdata)
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
                    <div className="col-6 text-center">
                        <h1>Search Books review of author</h1>
                        <h1>Enter author name</h1>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search books" aria-label="" aria-describedby="basic-addon1" onChange={handleChange}/>
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" onClick={booksFunction}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default Bookthirdproject;