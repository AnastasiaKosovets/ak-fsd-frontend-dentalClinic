import React, {useState, useEffect} from "react";
import "./UserAppointments.css";
import { Link } from "react-router-dom";
import { myAppointments } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const UserAppointments = () => {

    const credRdx = useSelector(userData);
    const token = credRdx?.credentials?.token;
    const [appointments, setAppointments] = useState([]);
    

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
              const res = await myAppointments(token);
              setAppointments(res.data);
            } catch (error) {
              console.log(error);
            }
          };
        
          fetchAppointments();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    return(
        <div className="userApDesign">
            {
                appointments.length > 0 
                    ? (
                        <div className="thisCard">
                            {
                                appointments.map(
                                    (appointment) => {
                                        const formattedDate = formatDate(appointment.date);
                                        const doctorName = appointment.doctor?.firstName + ' ' + appointment.doctor?.lastName;
                                        const patientName = appointment.patient?.firstName + ' ' + appointment.patient?.lastName;

                                        return (
                                            <div key={appointment.id} className="userAppD">
                                                <ProductCard className="usersCardDesign"
                                                    doctor_id={`Médico: ${doctorName}`}
                                                    patient_id={`Paciente: ${patientName}`}
                                                    treatment_id={`Tratamiento: ${appointment.treatment?.treatmentName}`}
                                                    date={`Fecha: ${formattedDate}`}
                                                />
                                                <Link to="/" className="modInfo">Cancelar Cita</Link>
                                            </div>
                                            
                                        )
                                    }
                                )
                            }
                        </div>
                    )

                    : (
                        <div className="general">No tienes citas</div>
                    )
            }

        </div>
    )
}