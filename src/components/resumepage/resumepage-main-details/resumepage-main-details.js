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
                                    steps={['/C/Users/rohit>', 3000, '/C/Users/rohit> Hello There. You are at rohitkatbamna.com!!', 3000]}
                                    loop={1}
                                    wrapper="p"
                                />
                            </div>
                            <div className="text-right resume-page-main-details-hi-rohit">
                                <Typical
                                    steps={['hello world', 3000, 'ハローワールド', 3000 , 'हैलो वर्ल्ड', 3000, 'કેમ છો દુનિયા', 3000 , '전 세계 여러분 안녕하세요', 3000 ,' မင်္ဂလာပါကမ္ဘာလောက',3000, 
                                    'Salut tout le monde', 3000 ,'হ্যালো ওয়ার্ল্ড', 3000 ,'Всем привет', 3000,'विश्वाला नमस्कार', 3000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </div>
                            <div className="text-right resume-page-main-details-i-am">
                                <h1>I develop react based websites</h1> 
                            </div>
                            <div className="text-right resume-page-main-details-summary-what-i-am mt-5">
                                <h2>Something to say about myself</h2>
                                <h3>Front End Developer with experience in blending art of design with skill 
                                    of programming to deliver engaging user experience through efficient website 
                                    development, proactive feature optimization, and relentless debugging.
                                </h3>
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