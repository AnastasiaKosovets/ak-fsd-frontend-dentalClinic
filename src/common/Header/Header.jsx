import React, { useState, useEffect } from "react";
import "./Header.css";
// método para conexión en modo elctura y escritura a RDX
import { useSelector, useDispatch } from "react-redux";
import { userData, userout } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../../img/logo2.png";

export const Header = () => {
  //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
  const datosCredencialesRedux = useSelector(userData);
  console.log(datosCredencialesRedux);

  //Redux en modo escritura
  const dispatch = useDispatch();
  //Instancio navigate para poder moverme entre la SPA
  const navigate = useNavigate();
  // const roleId = datosCredencialesRedux?.credentials?.roleId;
  const credRdx = useSelector(userData);
  const role = credRdx.data.role;

  const handleLogout = () => {
    dispatch(userout({ credentials: "" }));
  };
  // console.log(roleId, "rooollllllll")

  return (
    <div className="headerDesign">
      <Navbar collapseOnSelect expand="lg" className="bg-transparent mainPart">
        <Container className="navBarStyle">
          <Navbar className="logoDesign m-1">
            <Nav.Link as={Link} to="/">
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
              {role === 1 ? (
                <>
                  {/* <Nav.Link
                    as={Link}
                    to="/doctorApp"
                    className="fw-semibold headerText"
                  >
                    Mis Citas
                  </Nav.Link> */}
                  <Nav.Link
                    as={Link}
                    to="/users"
                    className="fw-semibold headerText"
                  >
                    Usuarios
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/appointments"
                    className="fw-semibold headerText"
                  >
                    Citas
                  </Nav.Link>
                </>
              ) : null}
              {role === 3 ? (
                 <Nav.Link
                    as={Link}
                    to="/doctorApp"
                    className="fw-semibold headerText"
                  >
                    Mis Citas
                  </Nav.Link> 
              ) : null}
            </Nav>
            <Nav className="secondPart">
              {datosCredencialesRedux?.credentials?.token ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/account"
                    className="fw-semibold headerText"
                  >
                    Mi Perfil
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/bookAppointment"
                    className="fw-semibold headerText"
                  >
                    Cita On-line
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="fw-semibold headerText"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="fw-semibold headerText"
                >
                  Iniciar sesión
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
