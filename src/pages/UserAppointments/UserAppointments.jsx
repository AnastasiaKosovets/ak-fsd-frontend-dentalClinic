import React, {useState, useEffect} from "react";
import "./UserAppointments.css";

import { Link } from "react-router-dom";
import { getAppointmentsByDoctor } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';

export const UserAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    
    useEffect(() => {
        if(appointments.length === 0){
            getAppointmentsByDoctor()
            .then(
                results => {
                    setAppointments(results.data.data)
                    // console.log(resultados.data.data)
                }
            ) .catch (error => console.log(error));
        }
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
                                    (appointment, index) => {
                                        const formattedDate = formatDate(appointment.date);

                                        return (
                                            <div key={index} className="userAppD">
                                                <ProductCard className="usersCardDesign"
                                                    doctor_id={`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                                                    patient_id={`${appointment.patient.firstName} ${appointment.patient.lastName}`}
                                                    treatment_id={appointment.treatment.treatmentName}
                                                    date={formattedDate}
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
                        <div>CARGANDO...</div>
                    )
            }

        </div>
    )
}