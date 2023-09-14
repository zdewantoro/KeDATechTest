import React from "react";
import "./main.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutCardComponents from "../../components/cards/AboutCardComponents";
import website from "../../assets/img/website.png";
import mobile from "../../assets/img/mobile.png";
import frontend from "../../assets/img/frontend.png";
import backend from "../../assets/img/backend.png";

const AboutPage = () => {
  return (
    <div className="home-page">
      <div className="about w-100 min-vh-100 ">
        <Container>
          <Row>
            <div className="aboutUs">
              <div className="wrapper">
                <h1>About Us</h1>
              </div>
            </div>
          </Row>
          <Row className="d-flex align-items-center">
            <Col className="cardDev">
              <Row className="cardDev1">
                <Col>
                  <AboutCardComponents
                    title={"Website Development"}
                    image={website}
                  />
                </Col>
                <Col>
                  <AboutCardComponents
                    title={"Mobile Development"}
                    image={mobile}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <AboutCardComponents
                    title={"Front-End Developer"}
                    image={frontend}
                  />
                </Col>
                <Col>
                  <AboutCardComponents
                    title={"Back-End Developer"}
                    image={backend}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="wrapper">
              <h1>Start Up Business</h1>
              <p className="pStartUp">
                Sebuah startup membuat suatu website seperti ERP untuk
                memudahkan seorang pengusaha dalam mencatat setiap barang yang
                keluar masuk dan mencatat setiap keuntungan yang mereka dapatkan
                setiap harinya.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
