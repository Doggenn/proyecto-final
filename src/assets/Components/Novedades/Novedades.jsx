import React, { useEffect, useState } from 'react'
import './Novedades.css'
import axios from 'axios';
import CarouselNovedades from './CarouselNovedades';


export default function Novedades() {

    const [novedades, setNovedades] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [usuarioSession, SetUsuariosession] = useState([])
    const urlBbdd = "https://servidor-protectora.vercel.app/api/novedades"
    const url = "https://servidor-protectora.vercel.app/api/usuario"


    const getNovedades = async () => {
        const res = await axios.get(urlBbdd)
        setNovedades(res.data)
    }

    const getUsuarios = async () => {
        const res = await axios.get(url)
        setUsuarios(res.data)
    }



    function sacarNombreUsuario(token) {

        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        SetUsuariosession(JSON.parse(jsonPayload));


    }




    useEffect(() => {
        getNovedades(),
            getUsuarios()

        if (localStorage.getItem('token')) {

            sacarNombreUsuario(localStorage.getItem('token'));

        }

    }, [])


    return (
        <>
            <div className="container-fluid-div">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center clasecontenido">

                        <div className='contenedor-novedades center '>
                            <div className='d-flex col-md-3 offset-md-3' style={{ color: '#00748E', marginTop: '20px', width: '100%' }}>
                                <h1>¡Hola {usuarioSession.username}! </h1>
                            </div>
                            <CarouselNovedades />
                            <div className='titl  d-flex'>
                                <h3>Novedades</h3>
                            </div>
                            {novedades.map((novedad, index) => (
                                <div className='carta-novedades ' key={index}>
                                    <div className='img-novedades'>
                                        <img src={novedad.imagen} alt="novedades" />
                                    </div>
                                    <div className='text-novedades'>
                                        <h2>{novedad.titulo}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}
