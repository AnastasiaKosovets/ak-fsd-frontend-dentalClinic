import React from 'react';
import './Treatment.css';
import ortodonciaImg from "../../img/ortodonciaImg.jpg";
import treatm5 from "../../img/treatm5.jpg";
import treatm3a from "../../img/treatm3a.jpg";
import treatm2 from "../../img/treatm2.jpg";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const Treatment = () => {
    return (
        <div className="treatmentDesign">
      <Container>
      <Row>
        <Col xs={10} sm={6} md={4} lg={4}>
          <Card className="m-2 mt-2" style={{ width: "25rem" }}>
            <Card.Img className="d-inline-block" variant="top" src={ortodonciaImg} />
            <Card.Body>
              <Card.Title className='treatmentStyleName'>Ortodoncia</Card.Title>
              <Card.Title>
              Cualquier persona puede solucionar problemas de maloclusión, malposición o apiñamientos dentales. Por consiguiente disponemos de una solución para cada persona y para cada edad.
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} sm={6} md={4} lg={4}>
          <Card className="m-2 mt-2" style={{ width: "25rem" }}>
            <Card.Img className="d-inline-block" variant="top" src={treatm3a} />
            <Card.Body>
              <Card.Text>Lucia de Castro</Card.Text>
              <Card.Title>
                Especialista en Odontopediatría de la Facultad de
                Medicina y Odontología de Universitat de València
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="m-2 mt-2 mb-2" style={{ width: "20rem" }}>
            {/* <Card.Img variant="top" src={doctor3} /> */}
            <Card.Body>
              <Card.Text>Svetlana Razhevska</Card.Text>
              <Card.Title>
                Especialista en Ortodoncia, trabaja con varios métodos como Invisalign
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      
    </div>
    )
     
}