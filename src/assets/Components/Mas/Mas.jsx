import React from 'react'
import { Link } from 'react-router-dom'

export default function Mas() {
    return (
        <div className='container'>
            <div className='col-12'>
                <Link to='/mas'></Link>
                <div>
                    <div>
                        <img src="public/images/Icons/icons-blue/protectora@3x.png" alt="" />
                        <h4>Asociaciones protectoras</h4>
                    </div>
                    <div>
                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="public/images/Icons/icons-blue/eventos@3x.png" alt="" />
                        <h4>Eventos</h4>
                    </div>
                    <div>
                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                    </div>
                </div>

                <div>
                    <div>
                        <img src="public/images/Icons/icons-blue/blogCopy@3x.png" alt="" />
                        <h4>Curiosidades</h4>
                    </div>
                    <div>
                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="public/images/Icons/icons-blue/ayuda@3x.png" alt="" />
                        <h4>Ayuda</h4>
                    </div>
                    <div>
                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="public/images/Icons/icons-blue/configuay@3x.png" alt="" />
                        <h4>Configuración</h4>
                    </div>
                    <div>
                        <img src="public/images/Icons/icons-pink/arrow@3x.png" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="public/images/Icons/icons-blue/salir@3x.png" alt="" />
                        <h4>Cerrar sesión</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

