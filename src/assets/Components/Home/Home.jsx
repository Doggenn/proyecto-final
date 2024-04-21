import React from 'react'
import Novedades from '../Novedades/Novedades'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Usuario from '../Usuario/Usuario';
import Mascotas from '../Mascotas/Mascotas';
import Registro from '../Registro/Registro';
import Login from '../Login/Login';
import Mas from '../Mas/Mas';
import PerfilMascotas from '../PerfilMascotas/PerfilMascotas';
import FormularioAdopcion from '../Formulario/FormularioAdopcion';
import EstadoAdopcion from '../Estado/EstadoAdopcion';
import OnBoardingOne from '../OnBoarding/OnBoardingOne';
import OnBoardingTwo from '../OnBoarding/OnBoardingTwo';
import OnBoardingThree from '../OnBoarding/OnBoardingThree';
import LoginAsociacion from '../LoginAsociacion/LoginAsociacion';
import Carrusel from '../OnBoarding/Carrusel';
import MascotasID from '../Mascotas/Mascota/Mascota';
import Filtros from '../Filtros/Filtros';
import CarouselNovedades from '../Novedades/CarouselNovedades';
import Mapa from '../Mapa/Mapa';
import OnBoardingFour from '../OnBoarding/OnBoardingFour';
import Menu from '../../Pages/Menu/Menu';


export default function Home() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="" element={<Novedades />} />
                    <Route path="/usuario" element={<Usuario />} />
                    <Route path="/mascotas" element={<Mascotas />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/mas" element={< Mas />} />
                    <Route path="/perfilmascotas" element={<PerfilMascotas />} />
                    <Route path="/formulario" element={<FormularioAdopcion />} />
                    <Route path="/estados" element={<EstadoAdopcion />} />
                    <Route path="/mapa" element={<Mapa />} />
                    <Route path="/boardingone" element={<OnBoardingOne />} />
                    <Route path="/boardingtwo" element={<OnBoardingTwo />} />
                    <Route path="/boardingthree" element={<OnBoardingThree />} />
                    <Route path="/boardingfour" element={<OnBoardingFour />} />
                    <Route path="/asociacion" element={<LoginAsociacion />} />
                    <Route path="/carrusel" element={<Carrusel />} />
                    <Route path="/mascotas/:id" element={<MascotasID />} />
                    <Route path="/filtros" element={<Filtros />} />
                    <Route path="/novedades" element={<Novedades />} />

                    <Route path="/carousel" element={<CarouselNovedades />} />
                </Routes>
                <Menu></Menu>
            </Router>
        </>
    )

}

