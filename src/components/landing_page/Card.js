import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function Card1(props) {
  const {category, coursesImages, coursesNames } = props.data;
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = category;

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentWord((prevWord) => prevWord + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200); // Adjust the interval speed as needed

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  const slideNext = () => {
    carouselRef.current.slideNext();
  };

  const CustomArrow = ({ onClick, ...rest }) => {
    return null; // Return null to hide the arrow
  };

  return (
    <div className="container">
      <div>
        <div className="mt-5 mb-5">
          <h2 style={{ color: "#0B5ED7", textAlign: "center" }}>
          {currentWord}   
          </h2>
        </div>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          swipeable
          draggable
          showDots={false}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          customTransition="all 1s linear"
          customLeftArrow={<CustomArrow />} // Hide left arrow
          customRightArrow={<CustomArrow />} // Hide right arrow
          className="ms-5"
        >
          {coursesImages.map((image, index) => (
            <Card
              key={index}
              className=" me-2"
              style={{ width: "250px", height: "300px" }}
            >
              <Image src={image} alt={`Slide ${index + 1}`} fluid />
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    textAlign: "center",
                    margin: "0px",
                    marginBottom: "20px",
                  }}
                >
                  {coursesNames[index]}
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Card1;
