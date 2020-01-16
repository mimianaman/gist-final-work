import gallerydata from "../../data";
import React from "react";
import { Card } from "react-bootstrap";

const Slider = galleryimage => {
  return (
    <div>
      <div className="col-md-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="galleryimage" />
        </Card>
      </div>
      <div className="container">
        {gallerydata.map(gallery => (
          <Slider galleryimage={gallerydata.imgSrc} key={gallerydata.imgSrc} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Slider;
