import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bannar1 from "../img/bannar/bannar1.png";
import bannar2 from "../img/bannar/bannar2.png";
import bannar3 from "../img/bannar/bannar3.png";
import './slider.css';

const Carosul = () => {
  return (
    <>
      <Carousel fade className="slider">
        <Carousel.Item>
          <img className="d-block w-100" src={bannar1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannar2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannar3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carosul;
