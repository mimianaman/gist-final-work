/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.JPG";
let active = "";
const Navbar = props => {
  active = props === true ? "active" : "";

  return (
    <nav className="sticky-top navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand">
        <img src={logo} alt="website logo" />
      </a>

      <ul className="navbar-nav ml-auto text-right">
        <Link to="/" className={`omega nav-link ${active}`}>
          Home
        </Link>

        <Link to="/About" className={`omega nav-link ${active}`}>
          About Us
        </Link>

        <li>
          <Link to="/Programs" className={`omega nav-link ${active}`}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="/GetInvolved" className={`omega nav-link ${active}`}>
            Get-involved
          </Link>
        </li>

        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            About Us
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="aboutus.html">
              Our History
            </a>
            <a className="dropdown-item" href="aboutus.html">
              Our Mission
            </a>
            <a className="dropdown-item" href="aboutus.html">
              Our Vision
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            Programs
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="programs.html">
              GIST STEM Student Survey
            </a>
            <a className="dropdown-item text-capitalize" href="programs.html">
              early bird campaigne(EBC)
            </a>
            <a className="dropdown-item text-capitalize" href="programs.html">
              GIST mentorship{" "}
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            Get involved
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="volunteer.html">
              volunteer
            </a>
            <a className="dropdown-item" href="mentorship-form.html">
              Mentorship
            </a>
            <a className="dropdown-item" href="donate.html">
              Donate
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >
            Contact Us
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Our Vision
            </a>
            <a className="dropdown-item" href="#">
              Our Mission
            </a>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
