import React from "react";
import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";
import MentorShipForm from "../commons/MentorShipForm";
import { executivesData, aboutdata, gallerydata } from "../../data";
import Executives from "../Executives";
import about from "../pages/About";
import Slider from "../pages/Slider";
import App from "../pages/Slider";

const Home = () => {
  console.log("data ----", executivesData, gallerydata);
  return (
    <>
      <Header />
      <Navbar props={true} />
      <div className=" container">
        <div className="row mx-auto text-capitalize m-3 ">
          <h3>executives</h3>
        </div>
        <div className="row mx-auto">
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
      <div className="container">
        <div className="row ">
          {gallerydata.map(gallery => (
            <Slider
              galleryimage={gallerydata.imgSrc}
              key={gallerydata.imgSrc}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
