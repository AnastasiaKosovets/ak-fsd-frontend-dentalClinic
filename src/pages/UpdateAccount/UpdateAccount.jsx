import React from "react";
import "./UpdateAccount.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/useful";
// no esta enlazado con BBDD -->> crear axios en apiCalls
// intentar aplicar las validaciónes del login a este form

export const UpdateAccount = () => {

    

  return (

    <div className="updateDesign">
      Modifica tus datos
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={8}>
            <Form>
              {/* <Form.Group className="mb-3" controlId="email">
                <Form.Control type={"email"} placeholder={"Email"} name={email} />
              </Form.Group> */}
              {/* <InputText
            type={"email"}
            design={ "normalInput"
                
            }
            placeholder={"Introduce tu e-mail"}
            name={"email"}
            // functionHandler={InputHandler}
            // onBlurFunction={inputCheck}
          /> */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Control type="email" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="email" placeholder="Nombre" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Control type="email" placeholder="Apellido" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="document">
                <Form.Control type="email" placeholder="DNI/NIE" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="dateOfBirth">
                <Form.Control type="email" placeholder="Fecha de nacimiento" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Control type="email" placeholder="Dirección" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="telefonNumber">
                <Form.Control type="email" placeholder="Número de teléfono" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={10} md={6} lg={6} className="d-flex justify-content-center">
            <Link to="/" className="modInfo">
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
