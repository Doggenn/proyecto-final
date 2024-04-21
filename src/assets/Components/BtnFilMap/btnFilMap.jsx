// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
 import './btnFilMap.css';


const Filtro = () => {
  const [filtros, setFiltros] = useState({
    tipo: '',
    servicio: '',
  });

  // eslint-disable-next-line no-unused-vars
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
      <div className="filMap">
          <h2>Filtro</h2>
      <div className="tipoFilMap">
        <div className="botones-tipo">
          <button
            className={`buttonFilMap btn-tipoFilMap ${filtros.tipo === '' ? 'activo' : ''}`}
            onClick={() => setFiltros({ ...filtros, tipo: '' })}
                  >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img className='img_filMap' src="\images\imgfiltro\veterinario@2x.png" alt='filtro1' style={{marginRight: '10px'}}  />
                      </div>
            <p className='p_filMap'>Veterinario</p>
          </button>
          <button
            className={`buttonFilMap btn-tipoFilMap ${filtros.tipo === 'peluqueria' ? 'activo' : ''}`}
            onClick={() => setFiltros({ ...filtros, tipo: 'peluqueria' })}
                  >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img className='img_filMap' src="\images\imgfiltro\peluqueria@2x.png" alt="filtro2" style={{marginRight: '10px'}} />
                      </div>
           <p className='p_filMap'> Peluquería</p>
          </button>
          <button
            className={`buttonFilMap btn-tipoFilMap ${filtros.tipo === 'petfriendly' ? 'activo' : ''}`}
            onClick={() => setFiltros({ ...filtros, tipo: 'petfriendly' })}
                  >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img className='img_filMap' src="\images\imgfiltro\cafe@2x.png" alt="filtro3" style={{marginRight: '10px'}}/>
                      </div>
           <p className='p_filMap'>Pet friendly</p> 
          </button>
        </div>
      </div>
      <div className="serviciosFilMap">
        <div className="botones-servicio">
          <button
            className={`buttonFilMap btn-servicioFilMap ${filtros.servicio === '' ? 'activo' : ''}`}
            onClick={() => setFiltros({ ...filtros, servicio: '' })}
                  >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img className='img_filMap' src="\images\imgfiltro\educacion@2x.png" alt="filtro4" style={{marginRight: '10px'}} />
                      </div>
                      
            <p className='p_filMap'>Educación</p>
          </button>
          <button
            className={`buttonFilMap btn-servicioFilMap ${filtros.servicio === 'guarderia' ? 'activo' : ''}`}
            onClick={() => setFiltros({ ...filtros, servicio: 'guarderia' })}
                  >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img className='img_filMap' src="\images\imgfiltro\guarderia@2x.png" alt="filtro5" style={{marginRight: '10px'}} />
                      </div>
           <p className='p_filMap'>Guardería</p> 
          </button>
          <button
            className={`buttonFilMap btn-servicioFilMap ${filtros.servicio === 'tienda' ? 'activo' : ''}`}
            onClick={() => setFiltros({ ...filtros, servicio: 'tienda' })}
                  >
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img className='img_filMap' src="\images\imgfiltro\tienda@2x.png" alt="filtro6" style={{marginRight: '10px'}} />
                      </div>
            <p className='p_filMap'>Tienda</p>
          </button>
        </div>
          </div>
          <div className='aplyDeletFilMap'>
              <button className="buttonFilMap btn-borrarFilMap" onClick={handleBorrarFiltro} style={{color: 'rgb(236, 155, 148)'}}>Borrar Filtro</button>
              <button className="buttonFilMap btn-aplicarFilMap" onClick={handleAplicar}>Aplicar</button>
          </div>
      </div>
      
  );
};

export default Filtro;