import React, {useState, useEffect} from 'react';
import './Appointments.css';
import { Link } from "react-router-dom";
import { getAppointmentsByAdmin } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';


export const Appointments = () => {

    const credRdx = useSelector(userData);
    const token = credRdx?.credentials?.token;
    const [generalAppointments, setgeneralAppointments] = useState([]);

    // modifico useEffect para poder acceder a la respuesta detallada de las citas
    // ya que la respuesta en mi BBDD contiene un objeto 'data' que contiene un array de 'appointments'
    
    // useEffect(() => {
    //     if(appointments.length === 0){
    //         getAppointmentsByDoctor()
    //         .then(
    //             results => {
    //                 setAppointments(results.data.data)
    //                 // console.log(resultados.data.data)
    //             }
    //         ) .catch (error => console.log(error));
    //     }
    // }, []);

    useEffect(() => {
        getAppointmentsByAdmin(token).then((res) => {
            setgeneralAppointments(res.data);
        });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return(
        <div className='appointmentsDesign'>
            <div className='doctorAppointments'>
            <Link to="/doctorApp" className="modInfo">Mis citas</Link>
            </div>
            {
                generalAppointments.length > 0 
                    ? (
                        <div className="thisCard">
                            {generalAppointments.map(
                                    (generalAppointments) => {
                                        const formattedDate = formatDate(generalAppointments.date)
                                        return (
                                            <div key={generalAppointments.id}>
                                                <ProductCard className="usersCardDesign"
                                                doctor_id={`${generalAppointments.doctor.firstName} ${generalAppointments.doctor.lastName}`}
                                                patient_id={`${generalAppointments.patient.firstName} ${generalAppointments.patient.lastName}`}
                                                treatment_id={generalAppointments.treatment.treatmentName}
                                                date={formattedDate}
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