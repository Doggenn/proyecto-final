import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import './Mascota.css'



export default function MascotasID() {
    const [mascota, setMascotas] = useState([])
    const { id } = useParams();
    const getMascotas = async () => {
        const res = await axios.get("https://servidor-protectora.vercel.app/api/mascotas/" + id)
        console.log(res.data);
        setMascotas(res.data)
    }
    
    useEffect(() => {
        getMascotas()
    }, [])
    // if (mascota.sexo == "Hembra") {
    //     return "https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/5008964B-951F-4F13-A95E-B082815087A9.png"
    // };
    const [page, setPage] = useState(1);
    return (
        <>
            <div className='mascotaCabecera'>
                <div className='mascotaImagen'>
                    <img src={mascota.imagen} alt={"Foto de " + mascota.nombre} />
                </div>
                <div className='mascotaNombre'>
                    <div>
                        <img className='mascotaIcoShare' src={mascota.sexo_img} alt={mascota.sexo} />
                    </div>
                    <div>
                        <p>{mascota.nombre}</p>
                        <p>{mascota.ubicacion}</p>
                    </div>
                    <div>
                        <img className='mascotaIco' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/0315D523-89DF-4A64-8286-0AD97D153FD7.png" alt="Añadira favorito" />
                    </div>
                    <div>
                        <img className='mascotaIcoShare' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/05D83C1A-F50E-4428-8C5F-B2966C3A9B14.png" alt="Compartir" />
                    </div>
                </div>
            </div>
            <div className='mascotaInfo'>
                {page === 1 && (
                    <>
                        <div className='mascotaOpciones'>
                            <h4 className='mascotaOpcionesDatos' onClick={()=>setPage(1)}>Datos</h4>
                            <h4 onClick={()=>setPage(2)}>Salud</h4>
                            <h4 onClick={()=>setPage(3)}>Adopción</h4>
                        </div>
                        <div className='mascotaDatos'>
                            <div>
                                <div className='mascotaLinea'>
                                    <div className='mascotaLinea2'>
                                        <div>
                                            <img className='mascotaHuella' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/3FB22543-120C-4B6A-AA64-D7FA7570C3F5.png" alt="inf" />
                                        </div>
                                        <p>Especie</p>
                                    </div>
                                    <p>
                                        {mascota.especie}
                                    </p>
                                </div>
                                <div className='mascotaLinea'>
                                    <div className='mascotaLinea2'>
                                        <div>
                                            <img className='mascotaHuella' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/3FB22543-120C-4B6A-AA64-D7FA7570C3F5.png" alt="inf" />
                                        </div>
                                        <p>Fecha de nacimiento</p>
                                    </div>
                                    <p>
                                        {mascota.fecha_nacimiento}
                                    </p>
                                </div>
                                <div className='mascotaLinea'>
                                    <div className='mascotaLinea2'>
                                        <div>
                                            <img className='mascotaHuella' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/3FB22543-120C-4B6A-AA64-D7FA7570C3F5.png" alt="inf" />
                                        </div>
                                        <p>Sexo</p>
                                    </div>
                                    <p>
                                        {mascota.sexo}
                                    </p>
                                </div>
                                <div className='mascotaLinea'>
                                    <div className='mascotaLinea2'>
                                        <div>
                                            <img className='mascotaHuella' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/3FB22543-120C-4B6A-AA64-D7FA7570C3F5.png" alt="inf" />
                                        </div>
                                        <p>Tamaño</p>
                                    </div>
                                    <p>
                                        {mascota.tamaño}
                                    </p>
                                </div>
                                <div className='mascotaLinea'>
                                    <div className='mascotaLinea2'>
                                        <div>
                                            <img className='mascotaHuella' src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/3FB22543-120C-4B6A-AA64-D7FA7570C3F5.png" alt="inf" />
                                        </div>
                                        <p>Peso</p>
                                    </div>
                                    <p>
                                        {mascota.peso}Kg
                                    </p>
                                </div>
                                <div className="mascotaPersonalidad" dangerouslySetInnerHTML={{ __html: mascota.personalidad }}>
                                    {/* {mascota.personalidad} */}
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {page === 2 && (
                    <>
                        <div className='mascotaOpciones'>
                            <h4 onClick={()=>setPage(1)}>Datos</h4>
                            <h4 className='mascotaOpcionesSalud' onClick={()=>setPage(2)}>Salud</h4>
                            <h4 onClick={()=>setPage(3)}>Adopción</h4>
                        </div>
                        <div className='mascotaSalud'>
                            <p>Salud</p>
                        </div>
                    </>
                )}
                {page === 3 && (
                    <>
                        <div className='mascotaOpciones'>
                            <h4 onClick={()=>setPage(1)}>Datos</h4>
                            <h4 onClick={()=>setPage(2)}>Salud</h4>
                            <h4 className='mascotaOpcionesAdopcion' onClick={()=>setPage(3)}>Adopción</h4>
                        </div>
                        <div className='mascotaAdopcion'>
                            <p>Adopcion</p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
