import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/commons/Navbar";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Programs from "./components/pages/Programs";
import GetInvolved from "./components/pages/GetInvolved";
import MentorShipForm from "./components/commons/MentorShipForm";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
