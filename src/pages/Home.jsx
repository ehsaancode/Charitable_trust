import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Objectives from "./Objectives";
import Footer from "./Footer";
import Inagural from "./Inagural";
import Projects from "./Projects";
import Pipeline from "./Pipeline";
import Donation from "./Donation";
import Quote from "./Quote";

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "0px 2px",
  color: "#fff",
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(600); // Set initial carousel height

  useEffect(() => {
    // Update carousel height on window resize
    function updateCarouselHeight() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const newCarouselHeight = width < height ? height * 0.6 : 600;
      setCarouselHeight(newCarouselHeight);
    }

    // Call the function to set the initial carousel height
    updateCarouselHeight();

    // Attach event listener for window resize
    window.addEventListener("resize", updateCarouselHeight);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateCarouselHeight);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const imageStyle = {
    height: `${carouselHeight}px`,
    width: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <div style={containerStyle}>
        <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="/images/image2.jpg"
              alt="Image 1"
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="/images/Charityimg1.jpg"
              alt="Image 2"
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="/images/image3.jpg"
              alt="Image 3"
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="/images/Charityimg2.jpg"
              alt="Image 3"
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="/images/Charityimg3.jpg"
              alt="Image 3"
              style={imageStyle}
            />
          </Carousel.Item>
        </Carousel>
        <Objectives />
        <Inagural />
        <Projects />
        <Pipeline />
        <Donation />
        <Quote />
        <Footer />
      </div>
    </>
  );
};

export default Home;
