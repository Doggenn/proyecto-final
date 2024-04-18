import React from 'react'
import "./Menu.css";
import { Link } from 'react-router-dom'


export default function Menu() {
    return (
        <div>
            <div >
                <nav className='menuEstilo'>
                    <Link className='estiloNav' to="/Home"><img className='menuImg' src="./images/Icons/icons-blue/home@3x.png" alt="" /></Link>
                    <Link className='estiloNav' to="/Home"><img className='menuImg' src="./images/Icons/icons-blue/mapa@3x.png" alt="" /></Link>
                    <Link className='estiloNav' to="/Home"><img className='menuImg' src="./images/Icons/icons-blue/mascota@3x.png" alt="" /></Link>
                    <Link className='estiloNav' to="/usuario"><img className='menuImg' src="./images/foto-perfil/fotodeperfil@3x.png" alt="" /></Link>
                    <Link className='estiloNav' to="/boarding"><img className='menuImg' src="./images/Icons/icons-blue/mS@3x.png" alt="" /></Link>
                </nav>
            </div>
        </div>
    )
}
