import React from "react";
import './resumepage-main-details.css';
import Typical from 'react-typical';

function Resumepagemaindetails(){
    return(
        <>
        <div className="container-fluid resume-page-main-details-everything">
            <div className="row">
                <div className="col-12">
                    <div class="card" style={{ borderRadius:'16px',borderTop:'10px solid white'}}>
                        <div class="card-body resume-page-main-details-typical text-end">
                            <Typical
                                steps={['/C/Users/rohit>', 1000, '/C/Users/rohit> Hello There. You are at rohitkatbamna.com!!', 1000]}
                                loop={1}
                                wrapper="p"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Resumepagemaindetails;