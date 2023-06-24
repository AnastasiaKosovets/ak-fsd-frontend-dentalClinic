import React, { useState, useEffect } from "react";
import "./Header.css";
// import { ChangeView } from '../../common/ChangeView/ChangeView';

// método para conexión en modo elctura y escritura a RDX
import { useSelector, useDispatch } from "react-redux";
import { userData, userout } from "../../pages/userSlice";

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../../img/logo2.png";

export const Header = () => {
  //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
  const datosCredencialesRedux = useSelector(userData);

  //Redux en modo escritura
  const dispatch = useDispatch();
  //Instancio navigate para poder moverme entre la SPA
  const navigate = useNavigate();
  useEffect(()=>{

    if(!datosCredencialesRedux.credentials?.token){
        navigate("/");
    }
 },[]);
  return (
    <div className='headerDesign'>

            {datosCredencialesRedux.credentials?.token 

                ? (
                    <div className="linksDesign">
                        <div className="headerLink" >{datosCredencialesRedux?.credentials?.user?.name}</div>
                        <div className="headerLink" onClick={()=>dispatch(userout({ credentials: ""}))}>logout</div>
                    </div>
                )

                : (
                    <div className="linksDesign">
                        <div className="headerLink" onClick={()=>navigate("/login")}>Login</div>
                        <div className="headerLink" onClick={()=>navigate("/register")}>Register</div>
                    </div>
                )
                       
            }

         </div>
  );
};
