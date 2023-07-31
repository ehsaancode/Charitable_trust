import React from "react";

const OrganizationCard = () => {
  // Replace these values with your organization's information
  const organizationName = "DR. NURUL ISLAM MEMORIAL CHARITABLE TRUST (NIMCT)";
  const organizationLogoUrl = "./images/logo.jpg";
  const address =
    "Dankuni Mollah Para, Ward No.-4, P.O.-D.C.C., Dist- Hooghly, Pin-712310";
  const phoneNumber = "9231964466, 9748150484";

  const logoStyle = {
    width: "100px",
    height: "100px",
  };

  const handleGoogleMapsButtonClick = () => {
    // Replace this link with your Google Maps link
    const googleMapsLink = "https://goo.gl/maps/oQuHRHAgs5ZGFrAm7";

    // Open the link in a new tab
    window.open(googleMapsLink, "_blank");
  };

  return (
    <div className="pb-4">
      <div className="card">
        <div className="card-header">
          <img
            src={organizationLogoUrl}
            alt="Organization Logo"
            className="img-fluid"
            style={logoStyle}
          />
          <h5 className="card-title">{organizationName}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{address}</p>
          <p className="card-text">Phone: {phoneNumber}</p>
          <p className="card-text">
            E-mail:{" "}
            <a href="nimct2021@gmail.com" target="blank">
              nimct2021@gmail.com
            </a>
          </p>
          <button
            className="btn btn-primary"
            onClick={handleGoogleMapsButtonClick}
          >
            Find on Google Maps
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;
