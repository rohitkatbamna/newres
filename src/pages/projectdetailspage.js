import React from "react";
import Resumepagenavbar from "../components/resumepage/resumepage-navbar/resumepage-navbar";
import Newprojectfirst from "../components/projectdetailspage/project-news-firstproject/project-news-firstproject";
import Projectsidebar from "../components/projectdetailspage/project-details-page-sidebar/project-details-page-sidebar";

function Projectdetailspage(){
    return(
        <>
        <Resumepagenavbar />
        <Projectsidebar />
        </>
    );
}
export default Projectdetailspage;
