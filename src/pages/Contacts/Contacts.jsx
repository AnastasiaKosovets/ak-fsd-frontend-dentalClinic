import React from "react";
import "./Contacts.css";
import { Col, Container, Row } from "react-bootstrap";

export const Contacts = () => {
    
  return (
    <div className="generalContactsDesign">
      <Container className="d-flex justify-content-center">
        <Row className="d-flex rowContact m-1">
          <Col xs={10} sm={6} md={4} lg={4} className="mt-5">
            <div className="contactInfo">
              <p className="detailContact">Ponte en contacto con nosotros</p>
              <ul>
                <li>Teléfono: +34 755 85 45 00</li>
                <li>Correo electrónico: clinicadental@cdkosovets.com</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} className="mt-5 mapDesign">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49283.91491380797!2d-0.46988335136719!3d39.463800700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f155ad4eee3%3A0x3421744dcfd0f0a!2sCl%C3%ADnica%20Dental%20Adeslas!5e0!3m2!1ses!2ses!4v1688291912901!5m2!1ses!2ses"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col className="mt-5 contactColInfo" xs={10} sm={6} md={10} lg={10}>
            <div className="contactInfo">
              <p>¡Te esperamos pronto!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
