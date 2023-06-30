import React, { useEffect, useState } from "react";
import "./UpdateAccount.css";
import Form from "react-bootstrap/Form";
import { myProfile, updateProfile } from "../../services/apiCalls";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
import { inputHandler } from "../../services/useful";
import { useSelector } from "react-redux";
// no esta enlazado con BBDD -->> crear axios en apiCalls
// intentar aplicar las validaciónes del login a este form

export const UpdateAccount = () => {
  const [body, setBody] = useState({})
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const navigate = useNavigate();
  //   console.log(token);
  const [user, setUser] = useState({});

  const editHandler = (body, token) => {
    console.log(body)
        console.log(token)
    updateProfile(body, token).then((res) => {
        
      console.log("HOLA")
      navigate("/account")
    });
  };

  useEffect(() => {
    myProfile(token).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);

  return (
    <div className="updateDesign">
      Modifica tus datos
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={8}>
            <Form>
              <Form.Group className="mb-3 mt-4" controlId="email">
                <Form.Control
                  type="email"
                  name="email"
                  maxLength={25}
                  placeholder={user.email}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Control
                  type="text"
                  name="firstName"
                  maxLength={25}
                  placeholder={user.firstName ? user.firstName : "Introduce tu nombre"}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Control
                  type="text"
                  name="lastName"
                  maxLength={25}
                  placeholder={user.lastName ? user.lastName : "Introduce tu apellido"}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="document">
                <Form.Control
                  type="text"
                  name="document"
                  maxLength={25}
                  placeholder={user.document ? user.document : "Introduce tu NIE/DNI"}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="dateOfBirth">
                <Form.Control
                  type="string"
                  name="dateOfBirth"
                  maxLength={10}
                  placeholder={user.dateOfBirth ? user.dateOfBirth : "Introduce tu fecha de nacimiento"}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Control
                  type="text"
                  name="address"
                  maxLength={40}
                  placeholder={user.address ? user.address : "Introduce tu dirección"}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="telefonNumber">
                <Form.Control
                  type="imteger"
                  name="telefonNumber"
                  maxLength={25}
                  placeholder={user.telefonNumber ? user.telefonNumber : "Introduce tu número de teléfono"}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={10} md={6} lg={6} className="d-flex justify-content-center">
            <Link
              className="modInfo"
              onClick={() => {
                editHandler(body, token);
              }}
            >
              Confirmar
            </Link>
            <Link to="/account" className="modInfo">
              Cancelar
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
