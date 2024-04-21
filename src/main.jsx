import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Novedades from "./assets/Components/Novedades/Novedades";
import Menu from "../src/assets/Pages/Menu/Menu.jsx"
import Usuario from './assets/Components/Usuario/Usuario.jsx';
import Mascotas from './assets/Components/Mascotas/Mascotas.jsx';
import Registro from './assets/Components/Registro/Registro.jsx';
import PerfilMascotas from './assets/Components/PerfilMascotas/PerfilMascotas.jsx';
import FormularioAdopcion from './assets/Components/Formulario/FormularioAdopcion.jsx';
import EstadoAdopcion from './assets/Components/Estado/EstadoAdopcion.jsx';
import OnBoardingFour from './assets/Components/OnBoarding/OnBoardingFour.jsx';
import OnBoardingTwo from './assets/Components/OnBoarding/OnBoardingTwo.jsx';
import OnBoardingThree from './assets/Components/OnBoarding/OnBoardingThree.jsx';
import LoginAsociacion from './assets/Components/LoginAsociacion/LoginAsociacion.jsx';
import Carrusel from './assets/Components/OnBoarding/Carrusel.jsx';
import MascotasID from './assets/Components/Mascotas/Mascota/Mascota.jsx';
import Filtros from './assets/Components/Filtros/Filtros.jsx';
import { CarouselCaption } from 'react-bootstrap';
import Mas from './assets/Components/Mas/Mas.jsx';
import Mapa from './assets/Components/Mapa/Mapa.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <Router>
      <Routes>
        <Route path="/usuario" element={<Usuario></Usuario>} />
        <Route path="/mascotas" element={<Mascotas></Mascotas>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/mas" element={< Mas />} />
        <Route path="/perfilmascotas" element={<PerfilMascotas />} />
        <Route path="/formulario" element={<FormularioAdopcion />} />
        <Route path="/estados" element={<EstadoAdopcion />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/boardingone" element={<OnBoardingFour />} />
        <Route path="/boardingtwo" element={<OnBoardingTwo />} />
        <Route path="/boardingthree" element={<OnBoardingThree />} />
        <Route path="/boardingfour" element={<OnBoardingFour />} />
        <Route path="/asociacion" element={<LoginAsociacion />} />
        <Route path="/carrusel" element={<Carrusel />} />
        <Route path="/mascotas/:id" element={<MascotasID />} />
        <Route path="/filtros" element={<Filtros />} />
        <Route path="/carousel" element={<CarouselCaption />} />

      </Routes>
      <Menu></Menu>
    </Router>

  </React.StrictMode>,
)
