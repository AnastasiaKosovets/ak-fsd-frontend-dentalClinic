import React, { useState, useEffect } from "react";
import "./UserAppointments.css";
import { Link, useNavigate } from "react-router-dom";
import {
  myAppointments,
  // bookAppointment,
  getAllDoctors,
  getAllTreatments,
  updateMyAppointment,
} from "../../services/apiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { deleteAppointment } from "../../services/apiCalls";
import { Modal, Form } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";
import { SelectOption } from "../../common/SelectOption/SelectOption";

export const UserAppointments = () => {
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [allTreatments, setAllTreatments] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [yourDate, setYourDate] = useState(new Date());
  const [confirmApp, setConfirmApp] = useState("");

  useEffect(() => {
    // Function that take dates of user from API
    const fetchAppointments = async () => {
      try {
        const res = await myAppointments(token);
        setAppointments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointments();
  }, [token]);
  // console.log(appointments[0])

  useEffect(() => {
    if (allDoctors?.length === 0) {
      getAllDoctors(allDoctors)
        .then((results) => {
          setAllDoctors(results);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (allTreatments?.length === 0) {
      getAllTreatments(allTreatments)
        .then((results) => {
          setAllTreatments(results);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const editHandler = async () => {
    const updatedAppId = selectedAppointment.id; 
    const updateAppointment = {
      // appointmentId: selectedAppointment,
      doctor_id: Number(selectedDoctor),
      treatment_id: Number(selectedTreatment),
      // This method transform date of DatePicker for better work with Backend
      date: yourDate.toISOString(),
    };
    // console.log("------------", updateAppointment);
    // console.log(selectedAppointment, "appointment");

    await updateMyAppointment(updateAppointment, token, selectedAppointment.id);

    setTimeout(() => {
      navigate("/account");
    }, 2500);
    setConfirmApp("Su cita ha sido confirmada");
  };

  const deleteHandler = async (appointmentId) => {
    try {
      // console.log(appointmentId);
      await deleteAppointment(appointmentId);
      const updateAppointments = appointments.filter(
        (appointment) => appointment.id !== appointmentId
      );
      setAppointments(updateAppointments);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModify = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="userApDesign">
      {appointments.length > 0 ? (
        <div className="thisCard">
          {appointments.map((appointment) => {
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
              <div key={appointment.id} className="userAppD">
                <ProductCard
                  className="usersCardDesign"
                  key={appointment.id}
                  doctor_id={`Médico: ${doctorName}`}
                  patient_id={`Paciente: ${patientName}`}
                  treatment_id={`Tratamiento: ${appointment.treatment?.treatmentName}`}
                  date={`Fecha: ${formattedDate}`}
                />
                <Link
                  to="/myAppointments"
                  onClick={() => deleteHandler(appointment.id)}
                  className="modInfo"
                >
                  Cancelar Cita
                </Link>
                <Link
                  to="#"
                  onClick={() => handleModify(appointment)}
                  className="modInfo"
                >
                  Modificar Cita
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="general">No tienes citas</div>
      )}
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Hola</p>
          <p>ID del Appointment: {selectedAppointment?.id}</p>
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
          <Form.Group className="pickerWidthStyle">
            <DateTimePicker
              className="my-datetime-picker"
              calendarClassName="my-calendar"
              // calendarIcon={null}
              tileDisabled={({ date }) =>
                date < new Date() ? "react-calendar__tile--disabled" : ""
              }
              value={yourDate}
              onChange={(date) => setYourDate(date)}
            />
          </Form.Group>
          <Link className="modInfo" onClick={editHandler}>
            Confirmar
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
