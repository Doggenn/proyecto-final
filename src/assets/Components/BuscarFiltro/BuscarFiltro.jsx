import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import './BuscarFiltro.css'
import Filtros from '../BtnFilMap/btnFilMap';



const BuscarFiltro = ({ onFilterChange }) => {
    const [filtro, setFiltro] = useState('');


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleInputChange = (event) => {
        const value = event.target.value;
        setFiltro(value);
        onFilterChange(value.toLowerCase()); // Pasamos la entrada al componente padre
    };

    return (
        <div className='buscador'>
            <div className='conta-buscar-f d-flex justify-content-betwee'>
                <input type='text' className='conta-buscar_ul' placeholder='Buscar' value={filtro} onChange={handleInputChange} />
                <img src="images/Icons/icons-pink/buscarpink@3x.png" alt="" />
            </div>

            <div className='icono-filt'> <button className='boton-modal' onClick={handleShow}>

                <img className='icono-filtro' src="images/Icons/icons-pink/filtros@3x.png" alt="" />  </button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Filtros />
            </Modal>
        </div>



    );
};

export default BuscarFiltro;