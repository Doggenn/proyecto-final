import React from 'react'
import "./Menu.css";
import { Link } from 'react-router-dom'


export default function Menu() {
    return (
        <div>
            <div className='MenuStilo'>
                <header>
                    <nav>
                        <Link className='estiloNav' to="/Home"><img src="./images/Icons/icons-blue/home@3x.png" alt="" /></Link>
                        <Link className='estiloNav' to="/Home"><img src="./images/Icons/icons-blue/mapa@3x.png" alt="" /></Link>
                        <Link className='estiloNav' to="/Home"><img src="./images/Icons/icons-blue/mascota@3x.png" alt="" /></Link>
                        <Link className='estiloNav' to="/usuario"><div><img src="./images/foto-perfil/fotodeperfil@3x.png" alt="" /></div></Link>

                        <Link className='estiloNav' to="/boarding"><img src="./images/Icons/icons-blue/mS@3x.png" alt="" /></Link>
                    </nav>
                </header>
            </div>
        </div>
    )
}
