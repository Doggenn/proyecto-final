import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MisMascotas() {
    const [mascotas, setMascotas] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const urlBbdd = "https://servidor-protectora.vercel.app/api/mascotas";

    const getMascotas = async () => {
        const res = await axios.get(urlBbdd);
        setMascotas(res.data);
    };

    useEffect(() => {
        getMascotas();
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='c-masc'>
            <h2>Mis mascotas</h2>
            <p>Accede al perfil de tus mascotas</p>
            <div className='d-flex'>
                {mascotas.map((mascota, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className='content-mascotas'
                        style={{
                            width: activeIndex === index ? '200px' : '100px',
                            height: activeIndex === index ? '200px' : '100px',
                            backgroundColor: activeIndex === index ? 'blue' : 'transparent',
                            transition: 'width 0.3s, height 0.3s'
                        }}
                    >
                        <div>
                            <img src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/7B4D144C-5CB3-47D5-A0C7-52D112F2BB67.png" alt="mascota" />
                        </div>
                        <span>{mascota.nombre}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
