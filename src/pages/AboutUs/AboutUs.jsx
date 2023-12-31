import React from "react";
import "./AboutUs.css";
import doctor1 from "../../img/doctor1.jpg";
import doctor2mod from "../../img/doctor2mod.jpg";
import doctor3 from "../../img/doctor3.webp";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const AboutUs = () => {
  return (
    <div className="aboutDesign">
      <Container>
        <Row>
          <Col xs={10} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2" style={{ width: "20rem" }}>
              <Card.Img
                className="d-inline-block"
                variant="top"
                src={doctor1}/>
              <Card.Body>
                <Card.Text>Dr. Juan Zubichi</Card.Text>
                <Card.Title>
                  Especialista en Prótesis dentales, el mejor de su promoción de
                  la Facultad de Medicina de Universitat de Valéncia
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2" style={{ width: "20rem" }}>
              <Card.Img
                className="d-inline-block"
                variant="top"
                src={doctor2mod}/>
              <Card.Body>
                <Card.Text>Dra. Lucia de Castro</Card.Text>
                <Card.Title>
                  Especialista en Odontopediatría graduada en Medicina y
                  Odontología de Universitat de València
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2 mb-2" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={doctor3} />
              <Card.Body>
                <Card.Text>Dra. Svetlana Razhevska</Card.Text>
                <Card.Title>
                  Especialista en Ortodoncia, trabaja con varios métodos uno de
                  ellos: Invisalign
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
