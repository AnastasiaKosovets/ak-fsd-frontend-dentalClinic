import React, { useState, useEffect } from "react";
import "./Users.css";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { getAllUsersByAdmin } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  // Redux hook, that permits access to dates of token
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const [infoUser, setInfoUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsersByAdmin(token).then((res) => {
      setInfoUser(res.data);
    });
  }, []);

  return (
    <div className="userDesign">
      {infoUser.length > 0 ? (
        <div className="thisCard">
          {infoUser.map((infoUser) => {
            return (
              <div key={infoUser.id}>
                <ProductCard
                  className="usersCardDesign"
                  id={` Id: ${infoUser.id}`}
                  email={`Email: ${infoUser.email}`}
                  firstName={`Nombre: ${infoUser.firstName}`}
                  lastName={`Apellido: ${infoUser.lastName}`}
                  document={`NIE/DNI: ${infoUser.document}`}
                  dateOfBirth={`Fecha de nacimiento: ${infoUser.dateOfBirth}`}
                  address={`Dirección: ${infoUser.address}`}
                  telefonNumber={`Número de teléfono: ${infoUser.telefonNumber}`}
                  collegialNumber={`Número de colegiado: ${infoUser.collegialNumber}`}
                  role_id={`Role_Id: ${infoUser.role_id}`}/>
              </div>
            );
          })}
        </div>
      ) : (
        <div>CARGANDO...</div>
      )}
    </div>
  );
};
