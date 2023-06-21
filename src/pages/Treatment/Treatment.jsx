import React from "react";
import "./Treatment.css";
import ortodonciaImg from "../../img/ortodonciaImg.jpg";
import treatm9 from "../../img/treatm9.jpg";
import treatm7 from "../../img/treatm7.jpg";
import treatm8 from "../../img/treatm8.jpg";
import treatm11 from "../../img/treatm11.jpg";
import treatm3a from "../../img/treatm3a.jpg";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const Treatment = () => {
  return (
    <div className="treatmentDesign">
      <Container>
        <Row className="firstRow">
          <Col xs={10} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2" style={{ width: "20rem" }}>
              <Card.Img
                className="d-inline-block"
                variant="top"
                src={ortodonciaImg}
              />
              <Card.Body>
                <Card.Title className="treatmentStyleName">
                  Ortodoncia
                </Card.Title>
                <Card.Title>
                  Cualquier persona puede solucionar problemas de malposición o
                  apiñamientos dentales. Por consiguiente disponemos de una
                  solución para cada persona y su edad.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2" style={{ width: "20rem" }}>
              <Card.Img
                className="d-inline-block"
                variant="top"
                src={treatm3a}
              />
              <Card.Body>
                <Card.Title className="treatmentStyleName">
                  Endodoncia
                </Card.Title>
                <Card.Title>
                  Se realiza con radiografía muy precisa cual nos permitirá ver
                  tu grado de afectación, tiempo de trabajo y pasos a
                  realizarte, comenzará el tratamiento
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={treatm9} />
              <Card.Body>
                <Card.Title className="treatmentStyleName">
                  Prótesis dentales
                </Card.Title>
                <Card.Title>
                  Nuestro equipo de protésicos dentales en Valencia te
                  recomendará la que mejor se adapte a tus necesidades para que
                  vuelvas a tener la sonrisa perfecta
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2 mb-2" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={treatm11} />
              <Card.Body>
                <Card.Title className="treatmentStyleName">
                  Prevención Bucal
                </Card.Title>
                <Card.Title>
                  La prevención en odontología como en cualquier área de
                  medicina, es algo muy importante que debemos concienciarnos a
                  realizarla por costumbre ya que cogida a su tiempo serámenos
                  indolora
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2 mb-2" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={treatm7} />
              <Card.Body>
                <Card.Title className="treatmentStyleName">
                  Odontopediatría
                </Card.Title>
                <Card.Title>
                  En nuestro Centro Odontológico tenemos los mejores expertos en
                  odontopediatría en Valencia, poniendo al cuidado,
                  mantenimiento y prevención la salud dental del niño desde su
                  infancia hasta su adolescencia
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="m-2 mt-2 mb-2" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={treatm8} />
              <Card.Body>
                <Card.Title className="treatmentStyleName">Empastes</Card.Title>
                <Card.Title>
                  Los empastes dentales son un procedimiento odontológico para
                  la eliminación de una caries devolviendo al diente su forma y
                  color natural. Es muy importante comprobar salud de tus
                  dientes
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="firstRow"></Row>
      </Container>
    </div>
  );
};
