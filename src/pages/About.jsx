import React from "react";
import Footer from "./Footer";
import MemberCard from "./Members";

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "20px",
  color: "#fff",
};

const About = () => {
  return (
    <>
      <div style={containerStyle} className="py-4 jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Named after the late Dr. Nurul Islam Mollah, a compassionate
            homeopathic physician who dedicated his life to serve the people,
            the Trust was formed in December 2021 with a vision to bring
            happiness and prosperity to the lives of the underprivileged. The
            Trust aims to make a positive impact in the society. Our Trust aims
            to provide health care services, distribute essential items and
            support education for underprivileged children.
          </p>
          <div>
            <div className="py-5 d-flex flex-wrap justify-content-center">
              <h2>
                The Dr Nurul Islam Memorial Charitable Trust is powered by a
                dynamic team of individuals who share a passion for social
                service. Here meet our super heroes:
              </h2>
              <div className="d-flex flex-wrap">
                <MemberCard
                  name="Dr Jahangir Mollah"
                  role="Founder and President"
                  photoSrc="./images/Demo.jpg"
                  description="Dankuni, Hooghly-712310"
                />
                <MemberCard
                  name="Ramij Raja(the Communicator)"
                  role="Secretary"
                  photoSrc="./images/Demo.jpg"
                  description="Bandipur Hooghly-712407"
                />
                <MemberCard
                  name="Dr Md Sajid (the Healer)"
                  role="Assistant Secretary"
                  photoSrc="./images/Demo.jpg"
                  description="Bandipur Hooghly-712407"
                />
                <MemberCard
                  name="Fatima Rahman (the money Master)"
                  role="Treasurer"
                  photoSrc="./images/Demo.jpg"
                  description="Dankuni, Hooghly-712310"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
