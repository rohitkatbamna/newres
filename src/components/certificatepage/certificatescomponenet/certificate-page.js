import React from "react";
import Certificatepage from "../../../pages/certificatespage";
import './certificate-page.css';
import learnhtml from '../../../assets/learn-html.jpg';

function Certificatepageall(){
    return(
        <div className="certificate-page-all-everything-component pb-5" style={{backgroundColor:'black'}}>
            <div className="card" style={{borderTop:'10px solid White',color:'white',borderRadius:'16px',borderBottom:'10px solid White'}}>
                <div className="card-body container-fluid" style={{backgroundColor:'black'}}>
                    <div className="row">
                        <p className="fs-1 fw-bold text-center col-12">My Certificates</p>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="fs-3">Learn HTML <img src={learnhtml}  style={{height:'300px',width:'400px'}}/></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Certificatepageall;