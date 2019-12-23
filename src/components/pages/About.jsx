import React from "react";
import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";
import { aboutdata } from "../../data";

const About = ({
  title,
  body,
  mission,
  missionOne,
  missionTwo,
  missionThree,
  missionFour,
  vision
}) => {
  return (
    <div>
      <Header />
      <Navbar props={true} />
      <div className="container pb-5">
        <>
          <div className="row text-uppercase font-weight-bold mt-5 ">
            {" "}
            {aboutdata.title}{" "}
          </div>
          <div className="row mt-3 "> {aboutdata.body} </div>
          <h5 className="text-uppercase pt-4 font-weight-bold">mission</h5>
          <li className="mt-3">{aboutdata.mission} </li>
          <li className="mt-3">{aboutdata.missionOne}</li>
          <li className="mt-3">{aboutdata.missionTwo} </li>
          <li className="mt-3">{aboutdata.missionThree} </li>
          <li className="mt-3">{aboutdata.missionFour} </li>
          <h5 className="text-uppercase font-weight-bold pt-4">vision</h5>
          <div className="row mt-3"> {aboutdata.vision} </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default About;
