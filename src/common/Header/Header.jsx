import React from "react";
import './Header.css';
import { ChangeView } from '../../common/ChangeView/ChangeView';



export const Header = () => {
    return (
        <div className="headerDesign">
            {/* <ChangeView 
                path={"/"}
                name={"Home"}
            />
            <ChangeView 
                path={"/login"}
                name={"Login"}
            />
            <ChangeView 
                path={"/register"}
                name={"Register"}
            />
            <ChangeView 
                path={"/treatment"}
                name={"Treatment"}
            /> */}
            <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand  text-light fw-semibold" href="/">Clinica Dental</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light fw-semibold" aria-current="page" href="#">Sobre Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-semibold" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-semibold" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light fw-semibold" href="/register">Registro</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tratamientos
          </a>
          
          <ul class="dropdown-menu text-light">
            <li><a class="dropdown-item fw-semibold" href="#">Prevención Bucal</a></li>
            <li><a class="dropdown-item fw-semibold" href="#">Ortodoncia</a></li>
            <li><a class="dropdown-item fw-semibold" href="#">Endodoncia</a></li>
            <li><a class="dropdown-item fw-semibold" href="/treatment">Ver todos</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
      }
 
