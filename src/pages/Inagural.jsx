import React, { useState, useEffect } from "react";

const Inagural = () => {
  const [imageWidth, setImageWidth] = useState(800); // Set the initial image width

  const containerStyle = {
    background: "linear-gradient(135deg, #28a745, #ffc107)",
    padding: "10px",
    paddingTop: "31px",
    color: "#fff",
  };

  useEffect(() => {
    // Update image width on window resize
    function updateImageWidth() {
      const width = window.innerWidth;

      // Set the desired image width based on the screen size
      // Adjust these values as needed to fit your design preferences
      setImageWidth(width < 768 ? width - 40 : 2500);
    }

    // Call the function to set the initial image width
    updateImageWidth();

    // Attach event listener for window resize
    window.addEventListener("resize", updateImageWidth);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateImageWidth);
    };
  }, []);

  const imageStyle = {
    maxWidth: `${imageWidth}px`, // Use maxWidth instead of width
    height: "auto",
    objectFit: "cover", // Ensure the image covers the container without stretching
    maxHeight: "450px", // Optional: Limit the maximum image height
  };

  return (
    <div style={containerStyle}>
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
