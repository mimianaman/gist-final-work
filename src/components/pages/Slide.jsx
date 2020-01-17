import React from "react";
import { Carousel } from "react-bootstrap";
import TamaleImage from "../../images/tamale-1.jpg";
import TamaleImageTwo from "../../images/tamale-2.jpg";

export const Slide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={TamaleImage} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TamaleImageTwo}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
