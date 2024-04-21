// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './FormularioAdopcion.css'
import VentanaEmergente from '../VentanaEmergente/VentanaEmergente';


export default function FormularioAdopcion() {

    const [page, setPage] = useState(1);

    const [ventanaEmergente, setVentanaEmergente] = useState(false);

    const showVentanaEmergente = () => {
        setVentanaEmergente(true);
    };

    const cerrarVentanaEmergente = () => {
        setVentanaEmergente(false);
    };

    return (

        <div className='formula col-10 ' style={{ width: '100%', height: '100vh' }}>

            <div className='encabezado d-flex '>
                {page > 1 && (
                    <div className="imagen-volver">
                        <img className='volver' src='https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/771DCE10-68CA-45C6-BAEE-E8DB414745D7.png' onClick={() => setPage(page - 1)}></img>
                    </div>
                )}
                <div className='col-10 '>
                    <h2 >Formulario de adopción</h2>
                </div>
            </div>
            <div className="col-10 form-princ">
                <form className='form col-12' action="" method="post">
                    {page === 1 && (
                        <fieldset className='form__group'>
                            <div className='text-t d-flex align-items-end'>
                                <h2>Tus datos</h2>
                            </div>
                            <div className="form ">
                                <p style={{ padding: '5px' }}><input className='col-12' type="text" placeholder='Nombre y apellidos' /></p>
                                <p style={{ padding: '5px' }}><input className='col-12' type="email" name="" id="" placeholder='Email' /></p>
                                <p style={{ padding: '5px' }}><input className='col-12' type="number" name="" id="" placeholder='Teléfono' /></p>
                                <p style={{ padding: '5px' }}>
                                    <input className='col-12' type="text" placeholder='DNI' />
                                </p>
                            </div>

                            <div className='text-t d-flex align-items-end' >
                                <h2>Dirección</h2>
                            </div>
                            <div className="">
                                <p style={{ padding: '5px' }}><input className='col-12' type="text" placeholder='Calle, número y piso' /></p>
                                <p style={{ padding: '5px' }}><input className='col-12' type="number" name="" id="" placeholder='Código postal' /></p>
                                <p style={{ padding: '5px' }}><input className='col-12' type="text" placeholder='Ciudad' /></p>
                                <div>
                                    <input type="checkbox" name="" id="condiciones" />
                                    <label style={{ fontSize: '10px', margin: '0 12px' }} htmlFor="condiciones">Acepto los términos y condiciones de la adopcion</label>
                                </div>

                            </div>
                        </fieldset>
                    )}

                    {page === 2 && (
                        <fieldset>
                            <div className='text-t d-flex align-items-end'>

                                <h2>Sobre las mascotas</h2>
                            </div>
                            <div className='formAnimales col-12 d-flex justify-content-between'>
                                <div className='text-start modif d-flex align-items-center'>
                                    <h3>¿Tienes otros animales?</h3>
                                </div>
                                <div className=' formAnimales_int '>
                                    <div className="formAnimales_int_b d-flex flex-row">
                                        <div className='d-flex flex-column'>
                                            <div>
                                                <label htmlFor="siMascotas">Sí</label>
                                            </div>
                                            <div >
                                                <input type="radio" name="mascotas" id="siMascotas" />
                                            </div>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <div>
                                                <label htmlFor="noMascotas">No</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="mascotas" id="noMascotas" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p><input className='col-12' type="text" placeholder='¿Cuales?' /></p>
                                <p><input className='col-12' type="text" placeholder='¿Se lleva bien con otros animales?' /></p>
                            </div>
                            <p className='text-start formPregunta'>¿Por qué has elegido adoptar?</p>
                            <input className='col-12' id="eleccion" type="text" />
                            <p className='text-start formPregunta'>¿Conoces las necesidades del animal?</p>
                            <input className='col-12' id="eleccion" type="text" />
                            <p className='text-start formPregunta'>¿Conoces sus gastos?</p>
                            <input className='col-12' id="eleccion" type="text" />
                            <p className='text-start formPregunta'>¿Conoces su alimentación?</p>
                            <input className='col-12' id="eleccion" type="text" />
                        </fieldset>
                    )}
                    {page === 3 && (
                        <fieldset>
                            <div className='text-t d-flex align-items-end'>
                                <h2>Familia y hogar</h2>
                            </div>
                            <p className='text-start formPregunta'>¿Dónde vives?</p>
                            <input className='col-12' id="eleccion" type="text" placeholder='Piso, casa, chalet...' />
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div className='formAnimales_int'>
                                    <p className='formPregunta'>¿Vives de alquiler?</p>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="siAlquiler">Sí</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="alquiler" id="siAlquiler" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="noAlquiler">No</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="alquiler" id="noAlquiler" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='formPregunta'>¿Tu casero permite animales?</p>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="siCasero">Sí</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="casero" id="siCasero" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="noCasero">No</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="casero" id="noCasero" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div >
                                    <p className='formPregunta'>¿Crees que podrías mudarte pronto?</p>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="siMudanza">Sí</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="mudanza" id="siMudanza" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="noMudanza">No</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="mudanza" id="noMudanza" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='formPregunta'>¿Tiene jardín?</p>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="siJardin">Sí</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="casero" id="siJardin" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="noCasero">No</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="casero" id="noCasero" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='formPregunta'>¿Vives con otras personas?</p>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <div>
                                                <label htmlFor="siPersonas">Sí</label>
                                            </div>
                                            <input type="radio" name="personas" id="siPersonas" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="noPersonas">No</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="personas" id="noPersonas" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='formPregunta text-start'>¿Están todos de acuerdo con la adopción?</p>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="siAdopcion">Sí</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="adopcion" id="siAdopcion" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="noAdopcion">No</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="adopcion" id="noAdopcion" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='formPregunta text-start'>¿Estás de acuerdo que visitemos tu casa?</p>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="siVisita">Sí</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="visita" id="siVisita" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>
                                            <label htmlFor="noVisita">No</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="visita" id="noVisita" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </fieldset>)}
                    {/* {page > 1 && (
                        <button className="button" type="button" onClick={() => setPage(page - 1)}>Retroceder</button>
                    )} */}
                    {page < 3 && <button className="boton-continuar button col-12" type="button" onClick={() => setPage(page + 1)}>Continuar</button>}
                    {page === 3 && <button onClick={showVentanaEmergente} className="boton-continuar col-12" type="submit">Enviar</button>}
                    {ventanaEmergente && (
                        <VentanaEmergente onClose={cerrarVentanaEmergente} />
                    )}


                </form>
            </div>
        </div>
    )
}
