import React from "react";
import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";
import MentorShipForm from "../commons/MentorShipForm";
import { executivesData, aboutdata } from "../../data";
import Executives from "../Executives";
import about from "../pages/About";
import Slider from "../pages/Slider";
import App from "../pages/Slider";

const Home = () => {
  console.log("data ----", executivesData);
  return (
    <>
      <Header />
      <Navbar props={true} />
      <div className=" container">
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
      <App />
      <Footer />
    </>
  );
};

export default Home;
