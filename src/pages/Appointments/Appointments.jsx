import React, {useState, useEffect} from 'react';
import './Appointments.css';
import { Link } from "react-router-dom";
import { getAppointmentsByDoctor } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';
// import { userData } from "../userSlice";
// import { useSelector } from "react-redux";


export const Appointments = () => {

    const [appointments, setAppointments] = useState([]);
    // const credRdx = useSelector(userData);

    // modifico useEffect para poder acceder a la respuesta detallada de las citas
    // ya que la respuesta en mi BBDD contiene un objeto 'data' que contiene un array de 'appointments'
    
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
    return(
        <div className='appointmentsDesign'>
            <div className='doctorAppointments'>
            <Link to="/doctorApp" className="modInfo">Mis citas</Link>
            </div>
            {
                appointments.length > 0 
                    ? (
                        <div className="thisCard">
                            {appointments.map(
                                    (appointment, index) => {
                                        return (
                                            <div key={index}>
                                                <ProductCard className="usersCardDesign"
                                                doctor_id={` Doctor: ${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                                                patient_id={`Paciente: ${appointment.patient.firstName} ${appointment.patient.lastName}`}
                                                treatment_id={`Tratamiento: ${appointment.treatment.treatmentName}`}
                                                // price={`Precio: ${appointment.price}`}
                                                date={`Fecha: ${appointment.date}`}
                                                />
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