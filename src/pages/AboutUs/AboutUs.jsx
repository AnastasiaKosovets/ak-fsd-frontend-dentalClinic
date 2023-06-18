import React from "react";
import "./AboutUs.css";
import doctor1 from "../../img/doctor1.jpg";
import doctor2 from "../../img/doctor2.jpg";
import doctor3 from "../../img/doctor3.webp";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { ChangeView } from "../../common/ChangeView/ChangeView";

export const AboutUs = () => {
  return (
    // <div className="aboutDesign">
    //   <Card style={{ width: "20rem" }}>
    //     <Card.Img variant="top" src={doctor1} />
    //     <Card.Body>
    //       <Card.Text>Dr. Juan Zubichi</Card.Text>
    //       <Card.Title>
    //         Especialista en Prótesis dentales, el mejor de la Facultad de
    //         Medicina
    //       </Card.Title>
    //     </Card.Body>
    //   </Card>
    //   <Card style={{ width: "20rem" }}>
    //     <Card.Img variant="top" src={doctor2} />
    //     <Card.Body>
    //       <Card.Text>Lucia de Castro</Card.Text>
    //       <Card.Title>
    //         Especialista en Odontopediatría, graduada de la Facultad de Medicina
    //         y Odontología de Universitat de València
    //       </Card.Title>
    //     </Card.Body>
    //   </Card>
    //   <Card style={{ width: "20rem" }}>
    //     <Card.Img variant="top" src={doctor3} />
    //     <Card.Body>
    //       <Card.Text>Card Title</Card.Text>
    //       <Card.Title>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Title>
    //     </Card.Body>
    //   </Card>
    // </div>

    <div className="aboutDesign">
      <Row>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={doctor1} />
            <Card.Body>
              <Card.Text>Dr. Juan Zubichi</Card.Text>
              <Card.Title>
                Especialista en Prótesis dentales, el mejor de la Facultad de
                Medicina
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={doctor2} />
            <Card.Body>
              <Card.Text>Lucia de Castro</Card.Text>
              <Card.Title>
                Especialista en Odontopediatría, graduada de la Facultad de
                Medicina y Odontología de Universitat de València
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={doctor3} />
            <Card.Body>
              <Card.Text>Card Title</Card.Text>
              <Card.Title>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
