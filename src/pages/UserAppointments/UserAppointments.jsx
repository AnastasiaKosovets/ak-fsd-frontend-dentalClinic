import React, { useState, useEffect } from "react";
import "./UserAppointments.css";
import { Link } from "react-router-dom";
import { myAppointments } from "../../services/apiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { deleteAppointment } from "../../services/apiCalls";

export const UserAppointments = () => {
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const [appointments, setAppointments] = useState([]);

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
              appointment.doctor?.firstName + " "
              + appointment.doctor?.lastName;
            const patientName =
              appointment.patient?.firstName + " " 
              + appointment.patient?.lastName;

            return (
              <div key={appointment.id} className="userAppD">
                <ProductCard
                  className="usersCardDesign"
                  key={appointment.id}
                  doctor_id={`Médico: ${doctorName}`}
                  patient_id={`Paciente: ${patientName}`}
                  treatment_id={`Tratamiento: ${appointment.treatment?.treatmentName}`}
                  date={`Fecha: ${formattedDate}`}/>
                <Link
                  to="/myAppointments"
                  onClick={() => deleteHandler(appointment.id)}
                  className="modInfo">
                  Cancelar Cita
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="general">No tienes citas</div>
      )}
    </div>
  );
};
