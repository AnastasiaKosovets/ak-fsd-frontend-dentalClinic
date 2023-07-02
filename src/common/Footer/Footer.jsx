import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../../img/logo2.png";
import copyright from "../../img/copyright.png";

export const Footer = () => {
  return (
    <div className="footerDesign">
      <Navbar bg="transparent">
        <Container className="navBarStyle">
          <Navbar>
            <Nav.Link as={Link} to="/">
              <img
                src={logo2}
                width="60"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"/>
            </Nav.Link>
          </Navbar>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <img
                src={copyright}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"/>
            </Nav.Link>
            <p className="copRg">2023 Anastasia Kosovets</p>
            <Nav.Link
              as={Link}
              to="/contacts"
              className="fw-semibold footerIconT">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-info-octagon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9.103 2h5.794a3 3 0 0 1 2.122 .879l4.101 4.1a3 3 0 0 1 .88 2.125v5.794a3 3 0 0 1 -.879 2.122l-4.1 4.101a3 3 0 0 1 -2.123 .88h-5.795a3 3 0 0 1 -2.122 -.88l-4.101 -4.1a3 3 0 0 1 -.88 -2.124v-5.794a3 3 0 0 1 .879 -2.122l4.1 -4.101a3 3 0 0 1 2.125 -.88z" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
