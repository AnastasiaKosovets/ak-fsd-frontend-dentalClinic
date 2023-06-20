import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from "../../img/logo2.png";
// import { ChangeView } from '../../common/ChangeView/ChangeView';
export const Footer = () => {


    return (
        <div className="footerDesign">
        <Navbar bg="transparent">
        <Container className="navBarStyle">
          <Navbar>
            <Nav.Link href="/">
              <img
                src={logo2}
                width="70"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Navbar>
        {/* <Nav.Link as={Link} to="/" className="fw-semibold">Clinica Dental</Nav.Link> */}
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="fw-semibold footerText">Redes Sociales</Nav.Link>
          <Nav.Link as={Link} to="/" className="fw-semibold footerText">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            
        </div>
    )
}