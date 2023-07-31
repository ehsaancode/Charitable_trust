import React from "react";
import { Card, Container } from "react-bootstrap";

const containerStyle = {
  background: "linear-gradient(135deg, #28a745, #ffc107)",
  padding: "20px",
  color: "#fff",
};

const BankDetails = () => {
  return (
    <div>
      <div className="bg-light text-dark" style={containerStyle}>
        <Container>
          <div className="border-0 shadow-sm rounded bg-dark text-light text-center p-4">
            <h3>
              Give your Donation/Zakat today and join us in the noble endeavor
              of creating social balance and uplifting the less fortunate within
              our community. Your generous contribution not only purifies our
              wealth but also spreads compassion, hope, and opportunities for
              those in need.
            </h3>
          </div>
          <div className="mt-5 text-center">
            <Card className="border-0 shadow-sm rounded p-4 mt-4">
              <h2 className="bg-info text-light p-2 rounded">Bank Details</h2>
              <Card.Body>
                <Card.Text>
                  <strong>Bank Name:</strong> AXIS BANK
                </Card.Text>
                <Card.Text>
                  <strong>Account Number:</strong> 922010023783838
                </Card.Text>
                <Card.Text>
                  <strong>IFS Code:</strong> UTIB0000409
                </Card.Text>
                <Card.Text>
                  <strong>Branch:</strong> DANKUNI
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mt-5 text-center">
            <Card className="border-0 shadow-sm rounded p-4 mt-4">
              <h2 className="border-0 shadow-sm rounded bg-info p-2 text-light">
                UPI Details
              </h2>
              <Card.Body>
                <Card.Text>
                  <strong>UPI ID:</strong> XXXXXX
                </Card.Text>
                <Card.Text>
                  <strong>UPI Holder Name:</strong> XXXXXXXXX
                </Card.Text>
                <Card.Text>
                  <strong>Bank Name:</strong> XXXXXX
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mt-2 text-center text-danger">
            <h4>
              *Donation is Exempt under Section 80G of Income Tax Act' 1961
            </h4>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BankDetails;
