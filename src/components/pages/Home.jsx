import React from "react";
import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";
import MentorShipForm from "../commons/MentorShipForm";
import { executivesData } from "../../data";
import Executives from "../Executives";
import Slide from "./Slide";

const Home = () => {
  console.log("data ----", executivesData);
  return (
    <>
      <Header />
      <Navbar props={true} />
      <Slide />
      <div className=" container">
        <div className="row mx-auto text-capitalize m-3 ">
          <h3>executives</h3>
        </div>
        <div className="power row mx-auto shadow p-3 mb-5 bg-white rounded">
          {executivesData.map(executive => (
            <Executives
              role={executive.role}
              name={executive.name}
              profileImage={executive.imgSrc}
              profile={executive.profile}
              key={executive.name}
            />
          ))}
        </div>
      </div>
      <MentorShipForm />
      <Footer />
    </>
  );
};

export default Home;
