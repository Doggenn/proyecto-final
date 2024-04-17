import React from 'react'
import "./Menu.css";
import { Link } from 'react-router-dom'


export default function Menu() {
    return (
        <div>
            <div className='MenuStilo'>
                <header>
                    <nav>
                        <Link className='estiloNav' to="/Home">Home</Link>
                    </nav>
                </header>
            </div>
        </div>
    )
}
