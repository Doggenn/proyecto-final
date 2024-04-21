// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './Login.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };


    const handdleLogin = (e) => {

        e.preventDefault();

        const data = {

            username: username,
            password: password

        }

        fetch('http://localhost:3000/login', {

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

            }



        }).catch(error => {

            console.log(error);

        })

    }


    return (

        <>  {loginSuccessful ? <Novedades /> :
            <div className='totalBorder'>
                <div className='total'>
                    <div className='titulo-im'>

                        <img src="images\Inicio\group29@2x.png" alt="logo" width={50} />
                        <img src="images\Inicio\group@2x.png" alt="icono" width={60} />
                        <div className='lasP'>
                            <p>¡Hola! para continuar,inicia sesión <br />o crea una cuenta</p>
                        </div>
                        <div className='form-1'>

                            <form className='formulario'>
                                <div className='correo'>
                                    <input className='input_L' type="text" placeholder='aei@gmail.com' onChange={(event) => { setUsername(event.target.value) }} />
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
                                <div>
                                    <Link to="/">
                                        <p>¿Has olvidado tu contraseña?</p>
                                    </Link>
                                </div>
                            </form>

                            <div className='botones'>
                                <button onClick={handdleLogin} className="btn btn-primary">Inicia sesión</button>
                                <button className="btn btn-outline-primary">Crear cuenta</button>
                            </div>

                        </div>
                    </div>
                </div >
            </div >}</>
    )
}