import React from "react";

// const containerStyle = {
//   background: "linear-gradient(135deg, #28a745, #ffc107)",
//   padding: "21px",
//   color: "#fff",
// };
const imageStyle = {
  height: "450px", // Set the desired fixed height here
  width: "100%",
};
const Inagural = () => {
  return (
    <div className="p-4 ">
      <div className="card">
        <div className="card-body">
          <h4 className="border-0 shadow-lg rounded card-title p-2 bg-light text-secondary">
            Inaugural programme:
          </h4>
          <p className="card-text">
            Our inaugural programme was a true celebration of humanity. The
            Trust was officially launched on 30th June 2022. The programme
            included a clothing distribution ceremony in which about 300
            underprivileged individuals received new clothing. Additionally, a
            homeopathic dispensary was started where the people could access
            free treatment.
          </p>
          <p className="card-text"></p>
        </div>
        <img
          className="card-img-bottom p-4"
          src="./images/NIMCT.jpg"
          alt="Card image cap"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default Inagural;
