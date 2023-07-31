import React, { useState } from "react";
import "./Objectives.css";
const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "20px",
  color: "#fff",
};

const Food = () => (
  <div>
    <div>
      <p>
        <h3 className="border-0 shadow-lg rounded text-secondary bg-light">
          1. Food:
        </h3>
        The objective of our trust with regard to food is to ensure that every
        individual, irrespective of their socio-economic backgrounds, has access
        to nutritious and wholesome food. Our Trust aims to address issues
        related to food scarcity, food insecurity, and malnutrition. We believe
        that access to food is a basic human right, and our objective is to
        create an environment where no individual has to go hungry or suffer the
        consequences of inadequate nutrition.
      </p>
      <img
        src="./images/Hungry.jpg"
        alt="Food Objective"
        style={{ width: "800px", height: "400px" }}
        className="img-fluid"
      />
    </div>
  </div>
);

const Health = () => (
  <div>
    <div>
      <p>
        <h3 className="border-0 shadow-lg rounded text-secondary bg-light">
          2. Health:
        </h3>
        The objective of our Trust with regard to health is to improve the
        overall health and well-being of the communities we serve. We strive to
        provide access to quality healthcare services and promote preventive
        healthcare practices. Our Trust aims to create awareness about the
        importance of hygiene, sanitation, and healthy lifestyle practices. Our
        objective is to empower individuals to take charge of their health and
        well-being and provide them with the necessary resources and support to
        achieve their health goals.
      </p>
      <img
        src="./images/health.jpg"
        alt="Health Objective"
        style={{ width: "800px", height: "400px" }}
        className="img-fluid"
      />
    </div>
  </div>
);

const Education = () => (
  <div>
    <div>
      <p>
        <h3 className="border-0 shadow-lg rounded text-secondary bg-light">
          3. Education:
        </h3>
        The objective of our Trust with regard to education is to promote
        education as a means to improve the overall quality of life. We aim to
        provide access to quality education to all individuals, especially those
        from underprivileged backgrounds. Our Trust strives to create an
        environment where education is considered a fundamental right, and every
        individual has access to the necessary resources and support to pursue
        their education aspirations. Our objective is to create an educated and
        empowered community that can drive positive change and progress.
      </p>
      <img
        src="./images/education.jpg"
        alt="Education Objective"
        style={{ width: "800px", height: "400px" }}
        className="img-fluid"
      />
    </div>
  </div>
);

const Objectives = () => {
  const [selectedTab, setSelectedTab] = useState("food");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "food":
        return <Food />;
      case "health":
        return <Health />;
      case "education":
        return <Education />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={containerStyle}>
        <div>
          <h1 style={{ marginBottom: "20px" }}>
            DR. NURUL ISLAM MEMORIAL CHARITABLE TRUST
          </h1>
          <p>
            Caring hearts and compassionate minds come together in the spirit of
            giving, shaping a brighter tomorrow for the underprivileged and
            underserved. With every act of kindness, we sow the seeds of hope
            and sow the seeds of hope and nurture the garden of positive change.
            Together, let us ignite a chain reaction of generosity, for it is in
            our unity that the true power of transformation lies. The journey of
            a charitable trust begins with a single step, but its impact
            resonates through generations, leaving a lasting legacy of love and
            care.
          </p>
        </div>
      </div>

      <div style={containerStyle}>
        <h2 className="m-3">OBJECTIVES</h2>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li
                className={`nav-item ${selectedTab === "food" ? "active" : ""}`}
              >
                <button
                  className={`nav-link ${
                    selectedTab === "food" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("food")}
                >
                  Food
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedTab === "health" ? "active" : ""
                }`}
              >
                <button
                  className={`nav-link ${
                    selectedTab === "health" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("health")}
                >
                  Health
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedTab === "education" ? "active" : ""
                }`}
              >
                <button
                  className={`nav-link ${
                    selectedTab === "education" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("education")}
                >
                  Education
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Objectives;
