import React, { Fragment } from 'react'
import { Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout} from "../actions/userActions"


function Header() {
   
    const alert= useAlert();
    const dispatch= useDispatch();

    const {user, loading } = useSelector(state => state.auth)
    const navigate = useNavigate();

    const logoutHandler = () =>{
        dispatch(logout());
        alert.success("LogOut exitoso");
    }

    return(


        <Fragment>

        <div className="header bgcolor mb-5">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="letra" href="/">Agro Conexión</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <br></br>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active text-header" aria-current="page" href="/home">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active text-header" aria-current="page" href="/crear-publicacion">Crear Publicacion</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active text-header" aria-current="page" href=""></a>
                        </li>
                        
                        <li class="nav-item dropdown text-header" >
                        <a class="nav-link dropdown-toggle text-header" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mí Perfil
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/perfil">Ver mi perfil</a></li>
                            <li><a class="dropdown-item" href="/editar-perfil">Editar mi perfil</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="/">Ayuda</a></li>
                        </ul>
                        </li>
                        </ul>

                        {user ? (<Link id="login_btn" onClick={logoutHandler} to="/"><button type="button" class="btn btn-warning">Cerrar sesión</button></Link>) : !loading && <Link to="/" id="login_btn"><button type="button" class="btn btn-warning">Iniciar sesión</button></Link>}
                       
                    </div>
                </div>
                </nav>

        </div>

        </Fragment>

    );
}


export default Header;
