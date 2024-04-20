// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Mascotas.css';
import Buscar from '../Buscar/Buscar';
import { Link } from 'react-router-dom';
import MisMascotas from '../MisMascotas/MisMascotas';


export default function Mascotas() {
    const [mascotas, setMascotas] = useState([])
    const urlBbdd = "https://servidor-protectora.vercel.app/api/mascotas"


    const getMascotas = async () => {
        const res = await axios.get(urlBbdd)
        console.log(res.data);
        setMascotas(res.data)
    }

    useEffect(() => {
        getMascotas()
    }, [])

    return (

        <div className='container'>

            <Buscar />
            <MisMascotas />
            <Link to={"/estados"}>
                <div className='b-border col-12 d-flex justify-content-between align-items-center'>
                    <div className='b-border-text'>
                        <h3>Estado de la adopcion</h3>
                    </div>
                    <div className='a-rrow'>
                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                    </div>
                </div>
            </Link>
            <div className='cards'>
                <div className='c-max d-flex justify-content-between align-items-center'>
                    <h2>Animales en adopción</h2>
                    <img src="public/images/Icons/icons-pink/filtros@3x.png" alt="" />
                </div>
                <div className='carta'>

                    {mascotas.map((mascota, index) =>
                        <Link key={index} to={`/mascotas/${mascota.id}`}>
                            <div className='card-animal' >
                                <div className='tamano-img'>
                                    <img className='t-max' src={mascota.imagen} alt={mascota.nombre} />
                                </div>
                                <div className='text-span d-flex justify-content-between align-items-center'>
                                    <h2 className='text-mas'> {mascota.nombre}</h2>
                                    <span>{mascota.ubicacion}</span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>

















        // <div className='container row'>
        //     <div className='card col-12' >
        //         {mascotas.map((item, index) => (
        //         <figure className='fig' key={index}>
        //             <img className='fig-img' src={item.imagen} alt="" />
        //         </figure>
        //         <div>
        //             <div>
        //                 <h2>{item.nombre}</h2>
        //             </div>
        //             <div>
        //                 <span>{item.ubicacion}</span>
        //             </div>
        //         </div>
        //         ))}
        //     </div>
        // </div>

    )
}
