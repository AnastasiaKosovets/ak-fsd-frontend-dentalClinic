import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Treatment } from "../Treatment/Treatment";
import { AboutUs } from "../AboutUs/AboutUs";
import { Users } from "../Users/Users";
import { Appointments } from "../Appointments/Appointments";
import { MyAccount } from "../MyAccount/MyAccount";
import { UserAppointments } from "../UserAppointments/UserAppointments";
import { UpdateAccount } from "../UpdateAccount/UpdateAccount";
import { DoctorApp } from "../DoctorApp/DoctorApp";
import { BookAppointment } from "../BookAppointment/BookAppointment";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctorApp" element={<DoctorApp />} />
        <Route path="/myAppointments" element={<UserAppointments />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/updateAccount" element={<UpdateAccount />} />
        <Route path="/bookAppointment" element={<BookAppointment />} />
      </Routes>
    </>
  );
};
