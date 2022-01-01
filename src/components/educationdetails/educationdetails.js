import React from "react";
import collegelogo from '../../assets/logo.png'

function Educationdetails(){
    return(
        <div>
            <div className="container-fluid text-center pb-5" style={{backgroundColor:'black'}}>
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{borderTop:'10px solid white',borderRadius:'16px',borderBottom:'10px solid white',color:'white'}}>
                            <div className="education-details-title" style={{backgroundColor:'black'}}>
                                <p className="fs-4">What I have done</p>
                                <p className="fs-3">Bachelor of Technology</p>
                                <p className="fs-2">Electronics And Telecommunication Engineering</p>
                                <p className="fs-2"><img src={collegelogo} style={{height:'30px', width:'30px'}}/>Prof Ram Meghe Institute Of Technology & Research</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Educationdetails;
