import React from "react";
import "./main.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactUsCardComponent from "../../components/cards/ContactUsCardComponent";
import { contactList } from "../../data/data.js";

const ContactPage = () => {
  return (
    <div className="home-page">
      <div className="contact w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="d-flex align-items-center">
            <Col className="cardDev">
              {contactList.map((item) => {
                return (
                  <div key={item.id}>
                    <ContactUsCardComponent
                      image={item.image}
                      title={item.title}
                      body={item.data}
                    />
                  </div>
                );
              })}
            </Col>
            <Col className="wrapper">
              <h1>Contact Us</h1>
              <p>Let us know what you have in mind!</p>
              <form action="">
                <div className="input-box">
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                  <input type="email" placeholder="E-mail" required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Message..." />
                </div>
                <button type="submit" className=" btn">
                  Post A Comment
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;
