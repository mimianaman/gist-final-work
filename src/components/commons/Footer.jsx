/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small unique-color-dark pt-4 ">
        <div className=" row container mx-auto ">
          <div className="col-4 ml-5">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1">Fill GIST Survey Form</h5>
                <h5>click here!</h5>
              </li>
            </ul>
          </div>
          <div className="c0l-4 mr-5">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item"></li>
              <li className="list-inline-item">
                <a
                  href="https://forms.gle/KR59ovGuBieMktdE6"
                  className="btn btn-outline-white btn-rounded"
                ></a>
              </li>{" "}
            </ul>
          </div>
          <div className="col-4 ml-2">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item"></li>
              <li className="list-inline-item">
                <a
                  href="https://forms.gle/vsny4USA8PZe8Khx9"
                  className="btn btn-outline-white btn-rounded"
                >
                  <h5 className="mb-1 ">Order a T'shirt</h5>
                  <h5>click here!</h5>
                </a>
              </li>{" "}
            </ul>
          </div>
          <div className="mx-auto ">
            <a
              href="https://web.facebook.com/gistech.ghana.5"
              target="_blank"
              className="fa fa-facebook"
            ></a>
            <a
              href="https://twitter.com/gist_ghana"
              className="fa fa-twitter"
            ></a>
            <a
              href="https://www.instagram.com/gistgh/"
              target="_blank"
              className="fa fa-instagram"
            ></a>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2019 Copyright
        </div>
      </footer>
    </div>
  );
};

export default Footer;
