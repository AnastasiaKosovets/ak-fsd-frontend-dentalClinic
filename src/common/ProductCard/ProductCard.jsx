import React, { useEffect } from "react";
import "./ProductCard.css";
import Card from "react-bootstrap/Card";

export const ProductCard = ({
  firstName,
  lastName,
  email,
  document,
  dateOfBirth,
  address,
  telefonNumber,
  collegialNumber,
  role_id,
  id,
  doctor_id,
  patient_id,
  treatment_id,
  price,
  date,
}) => {
  useEffect(() => {
    // console.log(doctor_id);
  }, []);

  return (
    <div className="cardPrD">
      <Card className="productCardDesign" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text className="cardText">{id}</Card.Text>
          <Card.Text className="cardText">{email}</Card.Text>
          <Card.Text className="cardText">{firstName}</Card.Text>
          <Card.Text className="cardText">{lastName}</Card.Text>
          <Card.Text className="cardText">{document}</Card.Text>
          <Card.Text className="cardText">{dateOfBirth}</Card.Text>
          <Card.Text className="cardText">{address}</Card.Text>
          <Card.Text className="cardText">{telefonNumber}</Card.Text>
          <Card.Text className="cardText">{collegialNumber}</Card.Text>
          <Card.Text className="cardText">{role_id}</Card.Text>
          <Card.Text className="cardText">{doctor_id}</Card.Text>
          <Card.Text className="cardText">{patient_id}</Card.Text>
          <Card.Text className="cardText">{treatment_id}</Card.Text>
          <Card.Text className="cardText">{price}</Card.Text>
          <Card.Text className="cardText">{date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
