import React from "react";
import "./AboutUs.css";
import doctor1 from '../../img/doctor1.jpg';
import doctor2 from '../../img/doctor2.jpg';
import doctor3 from '../../img/doctor3.webp';
import Card from 'react-bootstrap/Card';
// import { ChangeView } from "../../common/ChangeView/ChangeView";

export const AboutUs = () => {

  return (
    <div className="aboutDesign">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doctor1} />
      <Card.Body>
        <Card.Title>Dr. Juan Zubichi</Card.Title>
        <Card.Text>
          Especialista en Prótesis dentales, el mejor especialista de la Facultad de Medicina
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doctor2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doctor3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
  );
};
