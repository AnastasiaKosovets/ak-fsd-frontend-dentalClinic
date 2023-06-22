import React from "react";
import "./Header.css";
// import { ChangeView } from '../../common/ChangeView/ChangeView';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../../img/logo2.png";

export const Header = () => {
  return (
    <div className="headerDesign">
      {/* <ChangeView 
                path={"/"}
                name={"Home"}
            />
            <ChangeView 
                path={"/login"}
                name={"Login"}
            />
            <ChangeView 
                path={"/register"}
                name={"Register"}
            />
            <ChangeView 
                path={"/treatment"}
                name={"Treatment"}
            /> */}

      <Navbar collapseOnSelect expand="lg" className="bg-transparent mainPart">
        <Container className="navBarStyle">
          <Navbar className="logoDesign m-1">
            <Nav.Link href="/">
              <img
                src={logo2}
                width="60"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto firstPart">
              <Nav.Link
                as={Link}
                to="/treatment"
                className="fw-semibold headerText"
              >
                Tratamientos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="fw-semibold headerText"
              >
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/users" className="fw-semibold headerText">
                Usuarios
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/appointments"
                className="fw-semibold headerText"
              >
                Citas
              </Nav.Link>
            </Nav>
            <Nav className="secondPart">
              <Nav.Link
                as={Link}
                to="/login"
                className="fw-semibold headerText"
              >
                Iniciar sesión
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to="/register"
                className="fw-semibold headerText"
              >
                Registrarse
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};
