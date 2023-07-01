import React, { useState, useEffect } from "react";
import "./Appointments.css";
import { Link } from "react-router-dom";
import {
  deleteAppointment,
  getAppointmentsByAdmin,
} from "../../services/apiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Col, Container, Row } from "react-bootstrap";

export const Appointments = () => {
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const [generalAppointments, setgeneralAppointments] = useState([]);
  const [searchApp, setSearchApp] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  // const [appointments, setAppointments] = useState([]);

  // This hook depends of dates of token and update state os appointments
  useEffect(() => {
    getAppointmentsByAdmin(token)
      .then((res) => {
        setgeneralAppointments(res.data);
      })
      .catch((error) => console.log(error));
  }, [token]);

  // Another hook to filter the appointments according to the input value
  useEffect(() => {
    if (searchApp !== "") {
      const filtered = generalAppointments.filter((appointment) => {
        const doctor = appointment.doctor?.firstName;
        return (doctor?.toLowerCase() ?? "").includes(searchApp.toLowerCase());
      });
      setFilteredAppointments(filtered);
    } else {
      setFilteredAppointments(generalAppointments);
    }
    // console.log(generalAppointments)
  }, [searchApp, generalAppointments]);

  const handleSearch = (e) => {
    setSearchApp(e.target.value);
  };

  const deleteHandler = async (appointmentId) => {
    try {
      await deleteAppointment(appointmentId);
      const updatedAppointments = filteredAppointments.filter(
        (appointment) => appointment.id !== appointmentId
      );
      setFilteredAppointments(updatedAppointments);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="appointmentsDesign">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="searchDoctor">
              <input
                className="inputDoctorDesign"
                type="text"
                value={searchApp}
                onChange={handleSearch}
                placeholder="Buscar por médico"
              />
              <p className="inputDoctorText">
                {" "}
                Registradas: {filteredAppointments.length} citas
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {filteredAppointments.length > 0 ? (
              <div className="thisCard">
                {filteredAppointments.map((appointment) => {
                  const formattedDate = formatDate(appointment.date);
                  const doctorName =
                    appointment.doctor?.firstName +
                    " " +
                    appointment.doctor?.lastName;
                  const patientName =
                    appointment.patient?.firstName +
                    " " +
                    appointment.patient?.lastName;
                  return (
                    <div key={appointment.id}>
                      <ProductCard
                        className="usersCardDesign"
                        doctor_id={`Médico: ${doctorName}`}
                        patient_id={`Paciente: ${patientName}`}
                        treatment_id={`Tratamiento: ${appointment.treatment?.treatmentName}`}
                        date={`Fecha: ${formattedDate}`}
                      />
                      <Link
                        to="/appointments"
                        onClick={() => deleteHandler(appointment.id)}
                        className="modInfo"
                      >
                        Eliminar Cita
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>CARGANDO...</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
