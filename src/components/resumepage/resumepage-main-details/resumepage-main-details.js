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
                        <div class="card-body resume-page-main-details-typical">
                            <div className="text-end">
                                <Typical
                                    steps={['/C/Users/rohit>', 1000, '/C/Users/rohit> Hello There. You are at rohitkatbamna.com!!', 1000]}
                                    loop={1}
                                    wrapper="p"
                                />
                            </div>
                            <div className="text-right resume-page-main-details-hi-rohit">
                                <p>Hi I am Rohit Katbamna</p>
                            </div>
                            <div className="text-right resume-page-main-details-i-am">
                                <Typical
                                    steps={['I am', 1000, ' I am web developer', 1000 , ' I am react developer', 1000, ' I am HTML developer', 1000 , ' I am font end developer', 1000 , ' I am python developer', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Resumepagemaindetails;