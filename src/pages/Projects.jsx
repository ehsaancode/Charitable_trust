import React from "react";
import MemberCard from "./Members";

const imageStyle = {
  height: "450px", // Set the desired fixed height here
  width: "100%",
  display: "flex",
};
const flexContainerStyle = {
  display: "flex", // Set the display property to "flex"
};

const Projects = () => {
  return (
    <div className="p-4">
      <div className="card">
        <div className="card-body">
          <h4 className="border-0 shadow-lg rounded card-title p-2 bg-light text-secondary">
            Ongoing Project:
          </h4>
          <p className="card-text">
            Our charitable dispensary is a crucial part of our mission to
            provide accessible healthcare services to the community. The
            charitable homeopathic dispensary operates every week, serving a
            great number of patients every time. They are seen by qualified
            homoeopathic physicians and they receive free treatment and
            medicines.
          </p>
          <p className="card-text"></p>
        </div>
        <div>
          {" "}
          {/* Flex container */}
          <img
            className="card-img-bottom p-4"
            src="./images/Secondimg.jpg"
            alt="Card image cap"
            style={{ ...imageStyle, marginRight: "10px" }} // Add some margin between the images
          />
        </div>
        {/* second part */}
        <div className="pb-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="./images/Secondimg.jpg"
                  alt="First Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-6">
                <img
                  src="./images/Secondimg.jpg"
                  alt="Second Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
