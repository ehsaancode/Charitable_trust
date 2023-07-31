import React from "react";

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "21px",
  color: "#fff",
};
const Pipeline = () => {
  return (
    <>
      <div className="card my-4 p-4 mb-4 mx-4">
        <h3 className="text-secondary p-2 bg-light border-0 shadow-lg rounded">
          Projects on Pipeline:
        </h3>
        <div className="row">
          <div className="col-md-6">
            <img
              src="./images/kitchen.jpg"
              alt="Card Image 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title shadow-lg rounded p-2">
                Free Community Kitchen
              </h5>
              <p className="card-text">
                The Trust plans to start a community kitchen programme that
                focuses on providing food to street persons regularly. The
                programme aims to provide a nutritious meal to the homeless or
                other street persons who do not have access to food.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="./images/Coaching.jpg"
              alt="Card Image 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title shadow-lg rounded p-2">
                Free Coaching Centre
              </h5>
              <p className="card-text">
                The Trust plans to launch free coaching classes for the poor and
                needy students. The programme aims to provide free education to
                children who do not have the means to access formal education.
                It is an opportunity to educate underprivileged children and
                provide them with the necessary skills and knowledge to become
                active members of the society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pipeline;
