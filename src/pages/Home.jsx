import React, { useState } from "react";
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
  padding: "21px",
  color: "#fff",
};
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  const imageStyle = {
    height: "600px", // Set the desired fixed height here
    width: "100%",
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
