import React from "react";

const MemberCard = ({ name, role, photoSrc, description }) => {
  const cardStyle = {
    background: "#f8f9fa",
    border: "1px solid #ced4da",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    maxWidth: "300px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={photoSrc} alt={name} style={imageStyle} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{role}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default MemberCard;
