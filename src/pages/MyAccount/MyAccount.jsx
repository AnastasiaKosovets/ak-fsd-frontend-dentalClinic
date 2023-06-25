import React, { useEffect, useState } from "react";
import "./MyAccount.css";
import { myProfile } from "../../services/apiCalls";
import { Link } from "react-router-dom";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import Card from "react-bootstrap/Card";
import userIcon from "../../img/userIcon.png";
import treatm6 from "../../img/treatm6.jpg"
import { userData } from "../userSlice";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

export const MyAccount = () => {

    // const token = localStorage.getItem("token");
    // console.log(token);
    const credRdx = useSelector(userData);
    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        document: "",
        dateOfBirth: "",
        address: "",
        telefonNumber: ""
    });
    console.log(credRdx);
    // const dispatch = useDispatch();
    
    useEffect(() => {
        if(user.firstName === ""){
            myProfile(credRdx?.credentials?.token)
            .then((results) => {
                // let decodificated = jwt_decode(results.data.token);
                // console.log(decodificated)
                // localStorage.setItem("token", results.data.token);
                setUser({
                    email: results.data.data.user.email || "",
                    firstName: results.data.user.firstName,
                    lastName: results.data.user.lastName,
                    document: results.data.user.document,
                    dateOfBirth: results.data.user.dateOfBirth,
                    address: results.data.user.address,
                    telefonNumber: results.data.user.telefonNumber
                });
    //   let datosBackend = {
    //     token : results.data.token,
    //     user: decodificated
    //   }
    //   dispatch(myProfileInfo({ credentials: datosBackend}))
    //         setProfile(results.data)
    //         console.log(results.data);
        }).catch(error => console.log(error));
        }
    }, []);

    return(
        <div className="profileDesign">
            {/* {
                profile.length > 0 
                    ? ( */}
                    <div className="firstPartUser">
                    <Card.Img className="d-inline-block userIconImg" variant="top" src={userIcon} />
                    <p>Mis Datos</p>
                    <div className="thisCard">Los datos que traera Backend
                            {/* {
                                profile.map(
                                    profile => { */}
                                        {/* return ( */}
                                            <div key={user.id}>
                                                <ProductCard className="usersCardDesign"
                                                email={`Email: ${user.email}`}
                                                firstName={`Nombre: ${user.firstName}`}
                                                lastName={`Apellido: ${user.lastName}`}
                                                document={`NIE/DNI: ${user.document}`}
                                                dateOfBirth={`Fecha de nacimiento: ${user.dateOfBirth}`}
                                                address={`Dirección: ${user.address}`}
                                                telefonNumber={`Número de teléfono: ${user.telefonNumber}`}
                                                />
                                            </div>
                                        {/* )
                                    }
                                )
                            } */}
                        </div>
                        <Link to="/updateAccount" className="modInfo">Modificar</Link>
                    </div>
                    <div className="secondPartUser">
                    <Card.Img className="d-inline-block userIconA" variant="top" src={treatm6} />
                        <div className="rigthUserBtn">
                            <Link to="/myAppointments" className="modInfo">Mis Citas</Link>
                            <Link to="/bookAppointment" className="modInfo">Pedir Cita</Link>
                        </div>
                    </div>
                        
                    {/* // )

                    // : (
                    //     <div>CARGANDO...</div>
                    // ) */}
            {/* } */}
        </div>
    )
}