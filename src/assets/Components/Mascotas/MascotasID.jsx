import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function MascotasID() {

    const [mascotas, setMascotas] = useState([])
    const { id } = useParams();
    const urlBbdd = "https://servidor-protectora.vercel.app/api/mascotas/"


    const getMascotas = async () => {
        const res = await axios.get("https://servidor-protectora.vercel.app/api/mascotas/" + id)
        console.log(res.data);
        setMascotas(res.data)
    }

    useEffect(() => {
        getMascotas()
    }, [])
    return (
        <div>
            {mascotas.map((mascota, index) => (
                <div key={index}>
                    <img src={mascota.imagen} alt={mascota.nombre} />
                </div>
            ))}
        </div>
    )
}
