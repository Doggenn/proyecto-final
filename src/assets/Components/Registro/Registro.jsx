import React, { useState } from 'react';
import './Registro.css'; 
import { Link } from 'react-router-dom';

export default function Registro() {
      // const [showRegistro, setShowRegistro] = useState(false);

  const handleUsuarioClick = () => {
    console.log('Botón de Usuario clickeado');
  };

  const handleProtectoraClick = () => {
    console.log('Botón de Asociación protectora clickeado');
  };

  const handleRegistrarseOtroMomentoClick = () => {
    console.log('Botón de Registrarse en otro momento clickeado');
  };
    return (
        <>
            <div className='background'>
                <div className='total1'>
                    <div className='titulo-imgOne'>
                    <p>¿Cómo quieres entrar?</p>
                    <div className='form-1'>
                        <div>
                            <div className='botonesOne'>
                                <Link to="/login">
                                <button onClick={handleUsuarioClick}>Usuario</button>
                                </Link>
                                <Link to="/login">
                                <button onClick={handleProtectoraClick}>Asociación protectora</button>
                                </Link>
                            </div>
                            <Link to="/login">
                                <p onClick={handleRegistrarseOtroMomentoClick}>Registrarse en otro momento</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
