import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./cards.css";

const ContactUsCardComponent = ({ image, title, body }) => {
  return (
    <div className="wrapCard">
      <Card className="wrapper">
        <Row className="wrapperCard">
          <Col>
            <Card.Img className="cardContact" variant="top" src={image} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{body}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ContactUsCardComponent;
