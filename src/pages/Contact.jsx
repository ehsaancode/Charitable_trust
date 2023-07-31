import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import OrganizationInfo from "./OrganizationInfo";

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "20px",
  color: "#fff",
};
const Contact = () => {
  return (
    <>
      <div className="bg-light text-dark py-5" style={containerStyle}>
        <Container>
          <h1 className="text-center mb-4">Contact Us</h1>
          <OrganizationInfo />

          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card className="border-0 shadow-sm rounded text-center p-4">
                <Card.Img
                  variant="top"
                  src="./images/Demo.jpg"
                  alt="Contact Person 1"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Dr. Jahangir Mollah</Card.Title>
                  <Card.Text>Founder & President</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="border-0 shadow-sm rounded text-center p-4">
                <Card.Img
                  variant="top"
                  src="./images/Demo.jpg"
                  alt="Contact Person 2"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Ramij Raja</Card.Title>
                  <Card.Text>Secretary</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="border-0 shadow-sm rounded text-center p-4">
                <Card.Img
                  variant="top"
                  src="./images/Demo.jpg"
                  alt="Contact Person 3"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Dr. Md Sajid</Card.Title>
                  <Card.Text>Asst. Secretary</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
