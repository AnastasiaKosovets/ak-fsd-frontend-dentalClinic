import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { ChangeView } from '../../common/ChangeView/ChangeView';
export const Footer = () => {


    return (
        <div className="footerDesign">
        <Navbar bg="transparent">
        <Container>
        <Nav.Link as={Link} to="/" className="fw-semibold">Clinica Dental</Nav.Link>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="fw-semibold">Redes Sociales</Nav.Link>
          <Nav.Link as={Link} to="/" className="fw-semibold">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            
        </div>
    )
}