import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Treatment } from "../Treatment/Treatment"
import { AboutUs } from "../AboutUs/AboutUs";
import { Users } from "../Users/Users";
import { Appointments } from "../Appointments/Appointments";
import { MyAccount } from "../MyAccount/MyAccount";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/account" element={<MyAccount />} />
      </Routes>
    </>
  );
};
