import React from "react";
import { Link } from "react-router-dom";

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "10px",
  paddingTop: "31px",
  color: "#fff",
};
const Card = () => {
  return (
    <>
      <div style={containerStyle}>
        <div
          className="card bg-dark text-white"
          style={{
            maxWidth: "100%",
            margin: "20px",
            border: "none",
          }}
        >
          <img
            src="./images/studybg.jpg" // Replace this with the URL of your background image
            className="card-img"
            alt="Background"
            style={{ objectFit: "cover", height: "50%", opacity: "0.3" }} // Adjust styles here
          />
          <div
            className="card-img-overlay"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="text-center">
              <h5
                className="card-title"
                style={{
                  fontSize: "3vw", // Use vw (viewport width) units for responsive font size
                  fontWeight: "bold",
                  maxWidth: "80%", // Limit the width to prevent text overflow
                  margin: "1rem auto", // Center the text horizontally
                }}
              >
                Appeal for Donation:
              </h5>
              <p
                className="card-text text-center"
                style={{ fontSize: "1.5vw", maxWidth: "80%", margin: "0 auto" }}
              >
                We appeal for your support to our non-profit organization, Dr.
                Nurul Islam Memorial Charitable Trust. Dedicated to helping
                underprivileged and marginalized communities, we strive to
                provide basic amenities, education, healthcare, and financial
                aid to improve their lives.
                <div className="d-flex justify-content-center">
                  <Link to="/bankDetails">
                    <button
                      type="button"
                      className="btn btn-success fw-bold p-2 m-2 d-none d-sm-block btn-lg"
                    >
                      DONATE
                    </button>
                    <button
                      type="button"
                      className="btn btn-success fw-bold p-2 m-2 d-sm-none btn-sm"
                    >
                      DONATE
                    </button>
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
