import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'

import Menu from './assets/Pages/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuario from './assets/Components/Usuario/Usuario';
import Mascotas from './assets/Components/Mascotas/Mascotas';
import Registro from './assets/Components/Registro/Registro';
import Login from './assets/Components/Login/Login';
import Mas from './assets/Components/Mas/Mas';
import PerfilMascotas from './assets/Components/PerfilMascotas/PerfilMascotas';
import FormularioAdopcion from './assets/Components/Formulario/FormularioAdopcion';
import Mapa from './assets/Components/Mapa/Mapa';
import EstadoAdopcion from './assets/Components/Estado/EstadoAdopcion';
import OnBoardingOne from './assets/Components/OnBoarding/OnBoardingOne';
import OnBoardingFour from './assets/Components/OnBoarding/OnBoardingFour';
import OnBoardingTwo from './assets/Components/OnBoarding/OnBoardingTwo';
import OnBoardingThree from './assets/Components/OnBoarding/OnBoardingThree';
import LoginAsociacion from './assets/Components/LoginAsociacion/LoginAsociacion';
import Carrusel from './assets/Components/OnBoarding/Carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MascotasID from './assets/Components/Mascotas/Mascota/Mascota';
import Filtros from './assets/Components/Filtros/Filtros';
import Novedades from "./assets/Components/Novedades/Novedades";
import CarouselNovedades from "./assets/Components/Novedades/CarouselNovedades";
import Home from "./assets/Components/Home/Home";



function parseJwt(token) {

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

let tokenExisteAndStillValid = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());


function App() {

  return (

    <>{tokenExisteAndStillValid ? <Home /> : <Login />}</>

  )
}

export default App
