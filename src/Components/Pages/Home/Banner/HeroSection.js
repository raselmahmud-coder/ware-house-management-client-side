import React from "react";
import { Carousel } from "react-bootstrap";
import header1 from "../../../../images/New Project(1).png";
import header2 from "../../../../images/New Project(2).png";
import header3 from "../../../../images/New Project(3).png";
import './HeroSection.css'
const HeroSection = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={header1} alt="First slide" />
          <Carousel.Caption>
            <h3>Creativity from the heart of the wood</h3>
            <p className="sm-none">
              Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna,
              at porttitor eros leo ac ex. Nunc molestie turpis varius purus
              accumsan maximus. Nam ut libero aliquet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={header2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Furniture that comforts the eyes</h3>
            <p className="sm-none">
              Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna,
              at porttitor eros leo ac ex. Nunc molestie turpis varius purus
              accumsan maximus. Nam ut libero aliquet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={header3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Leave the season in King style</h3>
            <p className="sm-none">
              Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna,
              at porttitor eros leo ac ex. Nunc molestie turpis varius purus
              accumsan maximus. Nam ut libero aliquet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroSection;
