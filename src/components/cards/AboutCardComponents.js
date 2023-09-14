import React from "react";
import { Card } from "react-bootstrap";

const AboutCardComponents = ({ image, title, body }) => {
  return (
    <div>
      <Card className="wrapper">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutCardComponents;
