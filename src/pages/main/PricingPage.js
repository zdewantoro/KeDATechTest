import React from "react";
import "./main.css";
import { Container, Row, Col } from "react-bootstrap";
import PricingCardComponents from "../../components/cards/PricingCardComponents";
import { priceList } from "../../data/data.js";

const PricingPage = () => {
  return (
    <div className="home-page">
      <div className="pricing w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row className="wrapPrice">
            {priceList.map((item) => {
              return (
                <Col>
                  <div key={item.id}>
                    <PricingCardComponents
                      price={item.price}
                      title={item.title}
                      items1={item.item1}
                      items2={item.item2}
                      items3={item.item3}
                      items4={item.item4}
                      items5={item.item5}
                      items6={item.item6}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PricingPage;
