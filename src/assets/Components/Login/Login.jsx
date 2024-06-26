// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';


export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const [mensajeError, setMensajeError] = useState('')
    const [usuarioSessionNombre, setSessionNombre] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };




    const handdleLogin = () => {


        const data = {

            username: username,
            password: password

        }

        fetch('https://servidor-protectora-v2.vercel.app/login', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        }).then(response => response.json()).then(result => {


            if (result.token) {

                localStorage.setItem('token', result.token)
                setLoginSuccessful(true);

            } else {

                setLoginSuccessful(false);
                setMensajeError(result.message);


            }


        }).catch(error => {

            console.log(error);

        })

    }


    const handdleRegistro = () => {


        const data = {

            username: username,
            password: password

        }

        fetch('https://servidor-protectora-v2.vercel.app/registro', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        }).then(response => response.json()).then(result => {


            if (result.token) {

                localStorage.setItem('token', result.token)
                setLoginSuccessful(true);

            } else {

                setLoginSuccessful(false);
                setMensajeError(result.message);

            }


        }).catch(error => {

            console.log(error);

        })

    }



    useEffect(() => {

        console.log(localStorage.getItem('token'));

        if (localStorage.getItem('token')) {

            setLoginSuccessful(true);

        }


    }, []);



    return (

        <>  {loginSuccessful ? <Home /> :
            <div className='totalBorder'>
                <div className='total'>
                    <div className='titulo-im'>

                        <img src="images\Inicio\group29@2x.png" alt="logo" width={50} />
                        <img src="images\Inicio\group@2x.png" alt="icono" width={60} />
                        <div className='lasP'>
                            <p>¡Hola! para continuar,inicia sesión <br />o crea una cuenta</p>
                        </div>
                        <div className='form-1'>
                            <form className='formulario1'>
                                <div className='correo'>
                                    <input className='input_L' type="email" placeholder='aei@gmail.com' onChange={(event) => { setUsername(event.target.value) }} />
                                </div>
                                <br />
                                <div className="password">
                                    <input className="input_L" type={showPassword ? 'text' : 'password'} onChange={(event) => { setPassword(event.target.value) }} placeholder="*********" />
                                    <button type="button" onClick={togglePasswordVisibility} className="password-toggle-btn">
                                        <div className="icon-container">
                                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                        </div>
                                    </button>
                                </div>
                            </form>
                            <div className='botones'>
                                <button onClick={handdleLogin} className="btn btn-primary">Inicia sesión</button>
                                <button onClick={handdleRegistro} className="btn btn-outline-primary">Crear cuenta</button>
                            </div>
                            {mensajeError ?

                                <div class="alert alert-danger" role="alert">
                                    {mensajeError}
                                </div> :

                                <div class="" role="alert">

                                </div>
                            }
                        </div>

                    </div>
                </div >
            </div >}</>
    )
}