import React from "react";
import './Header.css';
// import { ChangeView } from '../../common/ChangeView/ChangeView';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


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
            
            <Navbar collapseOnSelect expand="lg" className="bg-transparent">
      <Container>
      <Nav.Link as={Link} to="/" className="fw-semibold">Clinica Dental</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="" className="fw-semibold">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/treatment" className="fw-semibold">Tratamientos</Nav.Link>
            {/* <Nav.Link as={Link} to="/login" className="text-light fw-semibold">Login</Nav.Link> */}
            {/* <NavDropdown title="Tratamientos" className="fw-semibold" id="collasible-nav-dropdown">
              <Nav.Link as={Link} to="" className="treatmentHover">Prevención Bucal</Nav.Link>
              <Nav.Link as={Link} to="" className="treatmentHover">Ortodoncia</Nav.Link>
              <Nav.Link as={Link} to="" className="treatmentHover">Endodoncia</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link as={Link} to="/treatment" className="treatmentHover">Todos Tratamientos</Nav.Link>
            </NavDropdown> */}
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/login" className="fw-semibold">Login</Nav.Link>
          <Nav.Link as={Link} to="/register" className="fw-semibold">Registro</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
      }
 
