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
    const [appointments, setAppointments] = useState({});

    useEffect(() => {
        myAppointments(token).then((res) => {
            setAppointments(res.data);
        });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
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

                                        return (
                                            <div key={appointment.id} className="userAppD">
                                                <ProductCard className="usersCardDesign"
                                                    doctor_id={`Médico: ${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                                                    patient_id={`Paciente: ${appointment.patient.firstName} ${appointment.patient.lastName}`}
                                                    treatment_id={`Tratamiento: ${appointment.treatment.treatmentName}`}
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
                        <div>No tienes citas</div>
                    )
            }

        </div>
    )
}