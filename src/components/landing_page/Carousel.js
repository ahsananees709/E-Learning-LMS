import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";

function CarouselFade() {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
      <Carousel fade>
        <Carousel.Item>
          <img
            expand="lg"
            style={{ height: "70vh" }}
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>FIRST LEARN | THEN EARN</h5>
            <h3>Welcome To Skilly Brains Study Portal</h3>
            <p>In Technical courses we are offering Training of some
            Programming languages &amp; In Non-Technical there are some other courses</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "70vh" }}
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h5>FIRST LEARN | THEN EARN</h5>
          <h3>Welcome To Skilly Brains Study Portal</h3>
          <p>In Technical courses we are offering Training of some
          Programming languages &amp; In Non-Technical there are some other courses</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "70vh" }}
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h5>FIRST LEARN | THEN EARN</h5>
          <h3>Welcome To Skilly Brains Study Portal</h3>
          <p>In Technical courses we are offering Training of some
          Programming languages &amp; In Non-Technical there are some other courses</p>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;
