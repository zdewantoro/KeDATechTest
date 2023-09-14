import React from "react";
import "./main.css";
import { Container, Row, Col } from "react-bootstrap";
import businessAnalysis from "../../assets/img/business-analysis.png";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import PricingPage from "./PricingPage";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <p className="p1">
                "Excepteur sint occaecat cupidatat non proident"
              </p>
              <img
                src={businessAnalysis}
                alt="data-img"
                className="imgBusiness"
              />
            </Col>
            <Col>
              <p className="p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <span />
                Aliquam ut eleifend felis, nec semper arcu.
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      <AboutPage />
      <PricingPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
