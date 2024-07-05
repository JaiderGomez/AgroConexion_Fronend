import React , {Fragment} from 'react'
import {useSelector } from 'react-redux';


export const Perfil = () =>{

    //Captura de los datos del usuario
    const {user, loading} = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :  (
                <Fragment>
                    <div className="container">

                        <h1>Bienvenido</h1>
                        <h2>{user.rol}: {user.nombres} {user.apellidos}</h2>
                        <div class="d-flex flex-row bd-highlight mb-3">
                
                            <div class="p-3 bd-highlight">
                                <p><span className="text-perfil2">Mi Departamento:</span> {user.departamento}</p>
                            </div>
                            <div class="p-3 bd-highlight">
                                <p><span className="text-perfil2">Mi Ciudad:</span> {user.ciudad}</p>
                            </div>
                            <div class="p-3 bd-highlight">
                                <p><span className="text-perfil2">Mi Dirección:</span> {user.direccion}</p>
                            </div>
                            <div class="p-3 bd-highlight">
                                <p><span className="text-perfil2">Fecha de Nacimiento:</span> {String(user.fecha_de_nacimiento).substring(0, 10)}</p>
                            </div>
                            <div class="p-3 bd-highlight">
                                <p><span className="text-perfil2">Numero de Celular:</span> {user.telefono}</p>
                            </div>
                            <div class="p-3 bd-highlight">
                                <p><span className="text-perfil2">Email:</span> {user.email}</p>
                            </div>
                                                       
                        </div>

                        <a class="btn btn-primary" href="/editar-perfil" role="button">Editar perfil</a>
                       
                    </div>
                </Fragment>
            )}
        </Fragment>

    )
}

export default Perfil;