import React, { useEffect, useState } from "react";
import "./DoctorApp.css";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { doctorAppointments } from "../../services/apiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";

export const DoctorApp = () => {
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const [appDoctor, setAppDoctor] = useState({});

  useEffect(() => {
    doctorAppointments(token).then((res) => {
      // console.log(res.data, "---");
      setAppDoctor(res.data);
    });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="docAppDesign">
      {appDoctor.length > 0 ? (
        <div className="thisCard">
          {appDoctor.map((appDoctor) => {
            const formattedDate = formatDate(appDoctor.date);
            return (
              <div key={appDoctor.id} className="userAppD">
                <ProductCard
                  className="usersCardDesign"
                  doctor_id={`Médico: ${appDoctor.doctor.firstName} ${appDoctor.doctor.lastName}`}
                  patient_id={`Paciente: ${appDoctor.patient.firstName} ${appDoctor.patient.lastName}`}
                  treatment_id={`Tratamiento: ${appDoctor.treatment?.treatmentName}`}
                  date={`Fecha: ${formattedDate}`}/>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="general"> ¡No tiene acceso!</div>
      )}
    </div>
  );
};
