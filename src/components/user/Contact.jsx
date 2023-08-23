import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const navigate = useNavigate();

  const returnToDash = () => {
    navigate('/dashboard')
  }

  const name = "John Doe";
  const address = "123 Main Street, City";
  const phone = "555-123-4567";
  const fax = "555-987-6543";
  const email = "john.doe@example.com";

  return (
    <div className="container">
      <h2 className="text-center mb-4">Contact Information</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="contact-card p-4 rounded" style={cardStyle}>
            <p className="mb-2">
              <strong>Name:</strong> {name}
            </p>
            <p className="mb-2">
              <strong>Address:</strong> {address}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {phone}
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="contact-card p-4 rounded" style={cardStyle}>
            <p className="mb-2">
              <strong>Fax:</strong> {fax}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {email}
            </p>
            <button onClick={returnToDash} className="btn btn-primary">Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom CSS styles for the contact card
const cardStyle = {
  backgroundColor: "#ffffff",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  fontSize: '15px'
};
