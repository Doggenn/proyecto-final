import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function MisMascotas() {

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
        <div className='c-masc'>
            <h2>Mis mascotas</h2>
            <p>Accede al perfil de tus mascotas</p>
            {/* {mascotas.map((icon, index) => (
                <img key={index} src=`"public/images/Icons/icons-pink/" + {icon.especie} + ".png" `alt = "" />
            ))} */}
        </div>
    )
}
