// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './btnFilMap.css';
import Modal from 'react-bootstrap/Modal';


const btnFilMap = () => {

    const [filtros, setFiltros] = useState({
        tipo: '',
        servicio: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFiltros((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleBorrarFiltro = () => {

    };

    function handleAplicar() {
        console.log('Aplicar filtros:', filtros);
    }

    return (

        <div className="modal show ventana-emergente" style={{ display: 'block', position: 'initial' }} >
            <Modal.Dialog>
                <Modal.Header className='d-flex justify-content-center'>
                    <Modal.Title style={{ color: '#00748E' }} className='d-flex align-items-center'>Filtros</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="col-12">

                        <div className="tipoFilMap">

                            <div
                                className={`buttonFilMap btn-tipoFilMap ${filtros.tipo === '' ? 'activo' : ''}`}
                                onClick={() => setFiltros({ ...filtros, tipo: '' })}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '40px' }}>
                                    <img className='img_filMap' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/C4CCEBBA-5E99-4615-8AA2-C12699993E1E.png" alt='filtro1' />
                                </div>
                                <div>
                                    <p className='p_filMap'>Veterinario</p>
                                </div>
                            </div>
                            <div
                                className={`buttonFilMap btn-tipoFilMap ${filtros.tipo === 'peluqueria' ? 'activo' : ''}`}
                                onClick={() => setFiltros({ ...filtros, tipo: 'peluqueria' })}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '40px' }}>
                                    <img className='img_filMap' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/A72616B0-3966-4DC9-9072-36CEBF627711.png" alt="filtro2" />
                                </div>
                                <div>
                                    <p className='p_filMap'> Peluquería</p>
                                </div>
                            </div>
                            <div
                                className={`buttonFilMap btn-tipoFilMap ${filtros.tipo === 'petfriendly' ? 'activo' : ''}`}
                                onClick={() => setFiltros({ ...filtros, tipo: 'petfriendly' })}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '40px' }}>
                                    <img className='img_filMap' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/55D0CE07-DA40-4C4D-95BF-F5ADCDDC0EF9.png" alt="filtro3" />
                                </div>
                                <div>
                                    <p className='p_filMap'>Pet friendly</p>
                                </div>
                            </div>


                            <div
                                className={`buttonFilMap btn-servicioFilMap ${filtros.servicio === '' ? 'activo' : ''}`}
                                onClick={() => setFiltros({ ...filtros, servicio: '' })}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '40px' }}>
                                    <img className='img_filMap' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/EC9B4808-2AC3-4D3E-891B-E135FBA7817C.png" alt="filtro4" />
                                </div>
                                <div>
                                    <p className='p_filMap'>Educación</p>
                                </div>
                            </div>
                            <div
                                className={`buttonFilMap btn-servicioFilMap ${filtros.servicio === 'guarderia' ? 'activo' : ''}`}
                                onClick={() => setFiltros({ ...filtros, servicio: 'guarderia' })}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '40px' }}>
                                    <img className='img_filMap' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/1745ED9B-A7B7-4B73-8C4B-CF110FFC7C62.png" alt="filtro5" />
                                </div>
                                <p className='p_filMap'>Guardería</p>
                            </div>
                            <div
                                className={`buttonFilMap btn-servicioFilMap ${filtros.servicio === 'tienda' ? 'activo' : ''}`}
                                onClick={() => setFiltros({ ...filtros, servicio: 'tienda' })}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '40px' }}>
                                    <img className='img_filMap' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/C8307983-6C64-47C2-BB08-D0516E2CA23F.png" alt="filtro6" />
                                </div>
                                <p className='p_filMap'>Tienda</p>
                            </div>

                        </div>
                        <div className='aplyDeletFilMap'>
                            <div style={{ margin: '10px' }}>
                                <button style={{ padding: '7px' }} className="b-boton" onClick={handleBorrarFiltro} >Borrar Filtro</button>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <button style={{ padding: '7px' }} className="b-boton" onClick={handleAplicar}>Aplicar</button>
                            </div>
                        </div>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>
            </Modal.Dialog>
        </div>



    )
}
export default btnFilMap;
