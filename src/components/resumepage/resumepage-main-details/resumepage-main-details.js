import React from "react";
import './resumepage-main-details.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3Alt, faHtml5, faJsSquare, faNodeJs, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import reduxlogo from '../../../assets/redux.svg';

function Resumepagemaindetails(){
    return(
        <>
        <div className="container-fluid resume-page-main-details-everything pb-5">
            <div className="row">
                <div className="col-12">
                    <div class="card" style={{ borderRadius:'16px',borderTop:'10px solid white', borderBottom:'10px solid white'}}>
                        <div class="card-body resume-page-main-details-typical">
                            <div className="text-center resume-page-main-details-hi-rohit fw-bold">
                                <Typical
                                    steps={['Hello World', 3000, 'ハローワールド', 3000 , 'नमस्ते दुनिया', 3000, 'કેમ છો દુનિયા', 3000 , '전 세계 여러분 안녕하세요', 3000 ,' Hej världen',3000, 
                                    'Salut tout le monde', 3000 ,'হ্যালো ওয়ার্ল্ড', 3000 ,'Всем привет', 3000,'Γειά σου Κόσμε', 3000, 'Rytsas vys',3000, 'ሰላም ልዑል', 3000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </div>
                            <div className="text-right resume-page-main-details-i-am text-center">
                                <h1>I develop react based websites</h1> 
                            </div>
                            <div className="text-center resume-page-main-details-summary-what-i-am mt-2">
                                <h2 className="fw-bold">Something to say about myself</h2>
                                <h3>Front End Developer with experience in blending art of design with skill 
                                    of programming to deliver engaging user experience through efficient website 
                                    development, proactive feature optimization, and relentless debugging.
                                </h3>
                            </div>
                            <div className="resume-page-main-details-what-skills-i-have text-center">
                                <p className="fs-2 ms-4 fw-bold">Skills I have</p>
                                <ul className="resume-page-main-details-what-skills-i-have-list">
                                    <li><FontAwesomeIcon icon={faHtml5}/> HTML</li>
                                    <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
                                    <li><FontAwesomeIcon icon={faJsSquare}/> JavaScript</li>
                                    <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
                                    <li><FontAwesomeIcon icon={faMobile}/> <FontAwesomeIcon icon={faLaptop}/> <FontAwesomeIcon icon={faDesktop}/> Responsive Web Design</li>
                                    <li><FontAwesomeIcon icon={faReact}/> React</li>
                                    <li className="d-flex flex-wrap justify-content-center align-items-center"><img src={reduxlogo} style={{color:'white',height:'30px',width:'30px',marginRight:'5px'}}/> Redux</li>
                                    <li><FontAwesomeIcon icon={faNodeJs}/> Node.js</li>
                                    <li><FontAwesomeIcon icon={faSass}/> SASS</li>
                                    <li><FontAwesomeIcon icon={faPython}/> Python</li>
                                    <li><FontAwesomeIcon icon={faPython}/> REST API</li>
                                </ul>
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