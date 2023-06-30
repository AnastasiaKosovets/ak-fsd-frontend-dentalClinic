import React, {useState, useEffect} from 'react';
import './Appointments.css';
import { Link, useNavigate } from "react-router-dom";
import { getAppointmentsByAdmin } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';


export const Appointments = () => {
    const credRdx = useSelector(userData);
    const token = credRdx?.credentials?.token;
    const [generalAppointments, setgeneralAppointments] = useState([]);
    const [searchApp, setSearchApp] = useState("");
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    useEffect(() => {
        getAppointmentsByAdmin(token).then((res) => {
            setgeneralAppointments(res.data);
        })
        .catch((error) => console.log(error));
    }, [token]);

    // Creo otro hook para realizar filtrado de las citas de acuerdo al valor ingresado
    useEffect(() => {
        if (searchApp !== '') {
          const filtered = generalAppointments.filter((appointment) => {
            const doctor = appointment.doctor?.firstName;
            return (doctor?.toLowerCase() ?? '').includes(searchApp.toLowerCase());
          });
          setFilteredAppointments(filtered);
        } else {
          setFilteredAppointments(generalAppointments);
        }
      }, [searchApp, generalAppointments]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    const handleSearch = (e) => {
        setSearchApp(e.target.value);
      };

    return(
        <div className="appointmentsDesign">
      <div className="doctorAppointments">
        <Link to="/doctorApp" className="modInfo">
          Mis citas
        </Link>
      </div>
      <div>
        <input
          type="text"
          value={searchApp}
          onChange={handleSearch}
          placeholder="Buscar por médico"
        />
      </div>
      {filteredAppointments.length > 0 ? (
        <div className="thisCard">
          {filteredAppointments.map((appointment) => {
            const formattedDate = formatDate(appointment.date);
            const doctorName = appointment.doctor?.firstName + ' ' + appointment.doctor?.lastName;
            const patientName = appointment.patient?.firstName + ' ' + appointment.patient?.lastName;
            return (
              <div key={appointment.id}>
                <ProductCard
                  className="usersCardDesign"
                  doctor_id={`Médico: ${doctorName}`}
                  patient_id={`Paciente: ${patientName}`}
                  treatment_id={`Tratamiento: ${appointment.treatment?.treatmentName}`}
                  date={`Fecha: ${formattedDate}`}
                />
              </div>
            );
          })}
          <p>Total de citas: {filteredAppointments.length}</p>
        </div>
      ) : (
        <div>CARGANDO...</div>
      )}
    </div>
    )
     
}