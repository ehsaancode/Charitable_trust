import React from "react";

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "20px",
  color: "#fff",
};
const Quote = () => {
  return (
    <>
      <div className="p-3 border-0 shadow-sm rounded" style={containerStyle}>
        <div
          className="card text-dark bg-light mb-3"
          style={{ maxWidth: "100%" }}
        >
          <div className="card-header">Quote</div>
          <div className="card-body">
            <h5 className="card-title pb-4">
              “NOT ALL OF US CAN DO GREAT THINGS. BUT WE CAN DO SMALL THINGS
              WITH GREAT LOVE.”
            </h5>
            <p className="card-text blockquote-footer">MOTHER TERESA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
