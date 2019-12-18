import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container-fluid  header">
        <div className="row d-flex justify-content-end">
          <a
            className="btn btn-info text-uppercase btn font-weight-bold"
            role="button"
          >
            donate
          </a>
          <a target="_blank" className="fa fa-facebook"></a>
          <a target="_blank" className="fa fa-twitter"></a>
          <a target="_blank" className="fa fa-instagram mr-5"></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
