import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small unique-color-dark pt-4 ">
        <div className=" row container mx-auto ">
          <div className="col-4 ml-5">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1">Become a volunteer</h5>
              </li>
              <li className="list-inline-item">
                <a
                  href="volunteer.html"
                  className="btn btn-outline-white btn-rounded"
                >
                  Sign up here!
                </a>
              </li>{" "}
              -->
            </ul>
          </div>
          <div className="c0l-4 ml-2">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1">Order a T'shirt</h5>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://forms.gle/KR59ovGuBieMktdE6"
                  className="btn btn-outline-white btn-rounded"
                >
                  click here!
                </a>
              </li>{" "}
              -->
            </ul>
          </div>
          <div className="col-4 ml-2">
            <ul className="list-unstyled list-inline text-center py-2">
              <li className="list-inline-item">
                <h5 className="mb-1">Fill GIST survey form</h5>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://forms.gle/vsny4USA8PZe8Khx9"
                  className="btn btn-outline-white btn-rounded"
                >
                  click here!
                </a>
              </li>{" "}
              -->
            </ul>
          </div>
          <div className="mx-auto ">
            <a
              href="donate.html"
              className="btn btn-info text-uppercase btn font-weight-bold "
              role="button"
            >
              donate
            </a>
            <a
              href="https://web.facebook.com/gistech.ghana.5"
              target="_blank"
              className="fa fa-facebook"
            ></a>
            <a href="#" className="fa fa-twitter"></a>
            <a
              href="https://www.instagram.com/gistgh/"
              target="_blank"
              className="fa fa-instagram"
            ></a>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> gistgh.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
