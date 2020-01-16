/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import phone from "../../images/phone.png";

const Header = () => {
  return (
    <div>
      <div className="container-fluid  header">
        <h5 className="text-white text-center">
          <img src={phone} alt="phone icon" />
          0543759688
        </h5>
        <div className="row d-flex justify-content-end city">
          <a
            href="https://web.facebook.com/gistech.ghana.5"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="fa fa-facebook"
          ></a>
          <a
            href="https://twitter.com/gist_ghana"
            className="fa fa-twitter"
          ></a>
          <a
            href="https://www.instagram.com/gistgh/"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="fa fa-instagram"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
