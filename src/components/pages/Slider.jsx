import { Carousel } from "react-bootstrap";
import React from "react";
import sliderImage from "../../images/tamale gist.jpg";
import sliderImageTwo from "../../images/tamale gist-2.jpg";
import Lightbox from "react-lightbox-component";
const App = () => (
  <div className="row">
    <Lightbox
      images={[
        {
          src: { sliderImage },
          title: "Tamele-Survey",
          description: "Northern Group"
        }
      ]}
    />
  </div>
);

export default App;
