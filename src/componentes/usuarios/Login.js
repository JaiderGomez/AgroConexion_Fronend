import React, {Fragment, useEffect, useState } from 'react'
//import MetaData from '../layout/MetaData'
import { Link, useNavigate } from "react-router-dom"
import { login, clearErrors } from "../../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'



export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)
    const alert= useAlert();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home")
        }
        if (error) {
            alert.error("Acceso denegado: verificar email y/o contraseña")
            dispatch(clearErrors)
        }
        
    }, [dispatch, isAuthenticated, error])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return(
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <div className="container sm">
                <form onSubmit={submitHandler}>
                        <h1 class="title-login">Accede</h1>
                        <p class="DM-Sans">Inicia sesión para continuar</p>
                        <p class="DM-Sans inp-text">CORREO ELECTRÓNICO:</p>
                        {/*Campo para email*/}
                        <input type="email" class="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        
                        <br></br><p class="DM-Sans inp-text">CLAVE:</p>
                        {/*Campo para contraseña*/}
                        <input type="password" class="form-control" id="inputClave" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        
                    <br></br>
                    <a href="/Registro">Registro Para Nuevos Usuarios</a>
                    <br></br>
                        <button type="submit" class="btn bgcolorbtn">Ingresar</button>
                    </form>
                    </div>
            )}
        </Fragment>
    )
}

export default Login;