import React, { useEffect, useState } from "react";
import "./BookAppointment.css";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../common/SelectOption/SelectOption";
import {
  bookAppointment,
  getAllTreatments,
  getAllDoctors,
} from "../../services/apiCalls";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
// con esta función formateo date antes de enviarlo al BBDD
import { format } from "date-fns";


// import { Form } from "react-bootstrap";
// import { inputHandler } from "../../services/useful";


export const BookAppointment = () => {
  const [body, setBody] = useState({});
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const navigate = useNavigate();
  const [allTreatments, setAllTreatments] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [yourDate, setYourDate] = useState(new Date());
  // const [yourTime, setYourTime] = useState("10:00");
  const [confirmApp, setConfirmApp] = useState("");
  //   const [user, setUser] = useState({});
  // const currentDate = new Date();


  useEffect(() => {
    if (allDoctors?.length === 0) {
      getAllDoctors(allDoctors)
        .then((results) => {
          setAllDoctors(results);
        })
        .catch((error) => console.log(error));
    }
  }, []);


  // console.log(allDoctors)


  useEffect(() => {
    if (allTreatments?.length === 0) {
      getAllTreatments(allTreatments)
        .then((results) => {
          setAllTreatments(results);
        })
        .catch((error) => console.log(error));
    }
  }, []);


  // console.log(allTreatments)


  const editHandler = async () => {
    const createAppointment = {
      doctor_id: Number(selectedDoctor),
      treatment_id: Number(selectedTreatment),
      // este método convierte la fecha de datePicker de modo que Back-end pueda recibirla
      date: yourDate.toISOString(),
    };
    console.log("------------", createAppointment);


    await bookAppointment(token, createAppointment);


    setTimeout(() => {
      navigate("/account");
    }, 2500);


    setConfirmApp("Su cita ha sido confirmada");
  };


  // console.log()
  return (
    <div className="mainBookApp">
      Pide tu cita
      {confirmApp !== "" ? (
        <div>{confirmApp}</div>
      ) : (
        <Container>
          <Row>
            <Col>
              <Form>
                <SelectOption
                  placeholder="Elige al doctor"
                  options={allDoctors}
                  changeFunction={(e) => {
                    setSelectedDoctor(e.target.value);
                  }}
                />
                <SelectOption
                  placeholder="Elige el tratamiento"
                  options={allTreatments}
                  changeFunction={(e) => {
                    setSelectedTreatment(e.target.value);
                  }}
                />
                <Form.Group>
                  <DateTimePicker
                  className="my-datetime-picker"
                  calendarClassName="my-calendar"
                  calendarIcon={null}
                    value={yourDate}
                    onChange={(date) => setYourDate(date)}
                  />
                  {/* <DatePicker
                    selected={yourDate}
                    onChange={(date) => setYourDate(date)}
                    placeholderText="Elige el día"
                    minDate={currentDate}
                  /> */}
                </Form.Group>
                <Form.Group>
                  {/* <TimePicker
                    className="react-time-picker"
                    value={yourTime}
                    onChange={(time) => setYourTime(time)}
                  /> */}
                </Form.Group>
              </Form>
            </Col>
            <Col
              xs={10}
              md={6}
              lg={6}
              className="d-flex justify-content-center"
            >
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
      )}
    </div>
  );
};


