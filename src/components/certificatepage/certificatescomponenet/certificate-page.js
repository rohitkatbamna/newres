import React from "react";
import Certificatepage from "../../../pages/certificatespage";
import './certificate-page.css';
import learnhtml from '../../../assets/html/1-html.jpg';
import learncss from '../../../assets/html/2-css.jpg';
import learnbootstrap from '../../../assets/html/3-bootstrap.jpg';
import responsiveweb from '../../../assets/html/4-responsive.jpg';
import htmlcssgit from '../../../assets/html/5-htmlcssgit.jpg'
import javascript from '../../../assets/html/6-js.jpg';
import javascript2 from '../../../assets/html/7-js2.jpg';
import injavascript from '../../../assets/html/8-in-js.jpg';

function Certificatepageall(){
    return(
        <div className="certificate-page-all-everything-component pb-5" style={{backgroundColor:'black'}}>
            <div className="card" style={{borderTop:'10px solid White',color:'white',borderRadius:'16px',borderBottom:'10px solid White'}}>
                <div className="card-body container-fluid" style={{backgroundColor:'black'}}>
                    <div className="row">
                        <p className="fs-1 fw-bold text-center col-12">My Certificates</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn HTML</p>
                            <img src={learnhtml}  style={{height:'400px',width:'500px'}}/>
                        </div>
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn CSS</p>
                            <img src={learncss}  style={{height:'400px',width:'500px'}}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn Bootstrap</p>
                            <img src={learnbootstrap}  style={{height:'400px',width:'500px'}}/>
                        </div>
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn Responsive Design</p>
                            <img src={responsiveweb}  style={{height:'400px',width:'500px'}}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <p className="fs-3 fw-bold">Build Website with HTML, CSS and Github</p>
                            <img src={htmlcssgit}  style={{height:'400px',width:'500px'}}/>
                        </div>
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn JavaScript</p>
                            <img src={javascript}  style={{height:'400px',width:'500px'}}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn Intermediate JavaScript</p>
                            <img src={javascript2}  style={{height:'400px',width:'500px'}}/>
                        </div>
                        <div className="col">
                            <p className="fs-3 fw-bold">Building Interactive JavaScript Websites</p>
                            <img src={injavascript}  style={{height:'400px',width:'500px'}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn HTML</p>
                            <img src={learnhtml}  style={{height:'400px',width:'500px'}}/>
                        </div>
                        <div className="col">
                            <p className="fs-3 fw-bold">Learn CSS</p>
                            <img src={learnhtml}  style={{height:'400px',width:'500px'}}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Certificatepageall;