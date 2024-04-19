import React from 'react'
import './Buscar.css'

export default function Buscar() {
    return (
        <div className='conta-buscar d-flex justify-content-between'>
            <input type='text' className='conta-buscar_ul' placeholder='Buscar' />
            <img src="public/images/Icons/icons-pink/buscarpink@3x.png" />
        </div>
    )
}
