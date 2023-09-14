import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PricingCardComponents = ({
  price,
  title,
  items1,
  items2,
  items3,
  items4,
  items5,
  items6,
}) => {
  return (
    <div>
      <Card className="wrapper" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{price}</Card.Title>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{items1}</ListGroup.Item>
          <ListGroup.Item>{items2}</ListGroup.Item>
          <ListGroup.Item>{items3}</ListGroup.Item>
          <ListGroup.Item>{items4}</ListGroup.Item>
          <ListGroup.Item>{items5}</ListGroup.Item>
          <ListGroup.Item>{items6}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default PricingCardComponents;
