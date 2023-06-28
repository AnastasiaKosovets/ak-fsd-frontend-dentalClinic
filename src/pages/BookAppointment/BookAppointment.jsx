import React, { useEffect, useState } from "react";
import "./BookAppointment.css";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { bookAppointment } from "../../services/apiCalls";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { inputHandler } from "../../services/useful";
import Select from "react-select";

export const BookAppointment = () => {
  const [body, setBody] = useState({});
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const navigate = useNavigate();
//   const [user, setUser] = useState({});
  const options = [
    { value: "opcion1", label: "Opción 1" },
    { value: "opcion2", label: "Opción 2" },
    { value: "opcion3", label: "Opción 3" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const editHandler = (body, token) => {
    console.log(body);
    bookAppointment(body, token).then((res) => {
      navigate("/account");
    });
  };

//   useEffect(() => {
//     myAppointments(token).then((res) => {
//       setUser(res.data);
//     });
//   }, []);

  return (
    <div className="mainBookApp">
      Pide tu cita
      <Container>
        <Row>
          <Col>
            <Form>
              <Select
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
              />
              <Select
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
              />
              <Select
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
              />
              {/* <Form.Group className="mb-3 mt-4" controlId="doctor_id">
                <Form.Control
                  type="integer"
                  name="doctor_id"
                //   maxLength={25}
                  placeholder={user.doctor_id}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="treatment_id">
                <Form.Control
                  type="text"
                  name="treatment_id"
                //   maxLength={25}
                  placeholder={user.treatment_id}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="date">
                <Form.Control
                  type="date"
                  name="date"
                  maxLength={25}
                  placeholder={user.date}
                  onChange={(e) => inputHandler(e, setBody)}
                />
              </Form.Group> */}
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
