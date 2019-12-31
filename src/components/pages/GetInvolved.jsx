import React from "react";
import Header from "../commons/Header";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";
import { Donate } from "./Donate";

const GetInvolved = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Donate />
      <Footer />
    </div>
  );
};

export default GetInvolved;
