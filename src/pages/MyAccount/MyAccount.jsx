import React, { useEffect, useState } from "react";
import "./MyAccount.css";
import { myProfile } from "../../services/apiCalls";
import { Link } from "react-router-dom";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import Card from "react-bootstrap/Card";
import userIcon from "../../img/userIcon.png";
import treatm6 from "../../img/treatm6.jpg";
import aptm1 from "../../img/aptm1.jpeg";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";

export const MyAccount = () => {
  const credRdx = useSelector(userData);
  const token = credRdx?.credentials?.token;
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    document: "",
    dateOfBirth: "",
    address: "",
    telefonNumber: "",
  });
  console.log(credRdx);

  useEffect(() => {
    myProfile(token).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="profileDesign">
      <div className="firstPartUser">
        <Card.Img
          className="d-inline-block userIconImg"
          variant="top"
          src={userIcon}/>
        <p>Mis Datos</p>
        <div className="thisCard">
          <div key={user.id} className="d1">
            <ProductCard
              className="usersCardDesign"
              email={`Email: ${user.email}`}
              firstName={`Nombre: ${user.firstName}`}
              lastName={`Apellido: ${user.lastName}`}
              document={`NIE/DNI: ${user.document}`}
              dateOfBirth={`Fecha de nacimiento: ${user.dateOfBirth}`}
              address={`Dirección: ${user.address}`}
              telefonNumber={`Número de teléfono: ${user.telefonNumber}`}/>
            <Link to="/updateAccount" className="modInfo">
              Modificar
            </Link>
          </div>
          <div className="middlePartUser">
            <p className="profileTxt">Revisa tus citas</p>
            <Card.Img
              className="d-inline-block userIconA"
              variant="top"
              src={treatm6}/>
            <div className="rigthUserBtn">
              <Link to="/myAppointments" className="modInfo">
                Mis Citas
              </Link>
            </div>
          </div>
          <div className="secondPartUser">
            <p className="profileTxt">Pide tu cita on-line</p>
            <Card.Img
              className="d-inline-block userIconA"
              variant="top"
              src={aptm1}/>
            <div className="rigthUserBtn">
              <Link to="/bookAppointment" className="modInfo">
                Pedir Cita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
