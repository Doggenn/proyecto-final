// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Menu.css";
import { Link } from 'react-router-dom'


export default function Menu() {
    return (
        <>
            <nav className='menuEstilo'>
                <Link className='estiloNav' to="/Home"><img className='menuImg' src="./images/Icons/icons-blue/home@3x.png" alt="home" /></Link>
                <Link className='estiloNav' to="/Home"><img className='menuImg' src="./images/Icons/icons-blue/mapa@3x.png" alt="mapa" /></Link>
                <Link className='estiloNav' to="/Home"><img className='menuImg' src="./images/Icons/icons-blue/mascota@3x.png" alt="mascotas" /></Link>
                <Link className='estiloNav' to="/usuario"><img className='menuImg' src="./images/foto-perfil/fotodeperfil@3x.png" alt="perfil" /></Link>
                <Link className='estiloNav' to="/boarding"><img className='menuImg' src="./images/Icons/icons-blue/mS@3x.png" alt="mas" /></Link>
            </nav>
        </>
    )
}
