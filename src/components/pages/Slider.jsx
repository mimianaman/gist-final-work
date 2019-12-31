import gallerydata from "../../data";
import React from "react";
import { Card } from "react-bootstrap";

const Slider = galleryimage => {
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="galleryimage" />
      </Card>
    </div>
  );
};

export default Slider;
