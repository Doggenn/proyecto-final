// eslint-disable-next-line no-unused-vars
import React from 'react';

import './BuscarFiltro.css'

const BuscarFiltro = () => {
    const handleFiltroClick = () => {
       
     };

    return (
        <>
            <div className='buscador'>
                <div className='conta-buscar d-flex justify-content-betwee'>
                    <input type='text' className='conta-buscar_ul' placeholder='Buscar' />
                    <img src="public/images/Icons/icons-pink/buscarpink@3x.png" alt="" />
                </div>

                <div className='icono-filt' onClick={handleFiltroClick}>
                    <img className='icono-filtro' src="public/images/Icons/icons-pink/filtros@3x.png" alt="" />
                </div>
            </div>
        
        </>
    );
}

export default BuscarFiltro;