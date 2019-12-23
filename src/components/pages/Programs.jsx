import React from "react";
import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";
import aboutdata, { programsdata } from "../../data";

const Programs = (survey, earlyBirdCampaign, mentorshipProgram) => {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container">
        <h5 className="pt-5">GIST Student STEM Survey</h5>
        <div className="pt-3"> {programsdata.survey} </div>
        <h5 className="pt-3">Early bird campaign (EBC)</h5>
        <div className="pt-3"> {programsdata.earlyBirdCampagn} </div>
        <h5 className="pt-3">GIST Mentorship Program</h5>
        <div className="pt-3"> {programsdata.mentorshipProgram} </div>
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
