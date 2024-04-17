import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Home from './assets/Pages/Home/Home'
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

function App() {

  return (
    <>

      <h1>holaaa =))</h1>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mas" element={< Mas />} />
          <Route path="/perfilmascotas" element={<PerfilMascotas />} />
          <Route path="/formulario" element={<FormularioAdopcion />} />
          <Route path="/estados" element={<EstadoAdopcion />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
