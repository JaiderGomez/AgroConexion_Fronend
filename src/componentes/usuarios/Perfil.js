import React , {Fragment} from 'react'
import {useSelector } from 'react-redux';


export const Perfil = () =>{

    //Captura de los datos del usuario
    const {user, loading} = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :  (
                <Fragment>

                <div class="container text-center">
                <h1 class="display-1">Bienvenido</h1>
                <h2 class="display-2">{user.nombres} {user.apellidos}</h2>
                <div class="row align-items-start mt-3" >
                    <div class="col">
                        <span className="text-perfil2">Mi Departamento:</span> {user.departamento}
                    </div>
                    <div class="col">
                        <span className="text-perfil2">Mi Ciudad:</span> {user.ciudad}
                    </div>
                    <div class="col">
                        <span className="text-perfil2">Mi Dirección:</span> {user.direccion}
                    </div>
                    <div class="col">
                        <span className="text-perfil2">Fecha de Nacimiento:</span> {String(user.fecha_de_nacimiento).substring(0, 10)}
                    </div>
                    <div class="col">
                        <span className="text-perfil2">Numero de Celular:</span> {user.telefono}
                    </div>
                    <div class="col">
                        <span className="text-perfil2">Email:</span> {user.email}
                    </div>
                    <div class="col">
                        <span className="text-perfil2">Rol:</span> {user.rol}
                    </div>
                    
                </div>
                </div>                              
                    
                <div className='mt-3'>

                    <a class="btn btn-primary" href="/editar-perfil" role="button">Editar perfil</a>
                       
                </div>
                </Fragment>
            )}
        </Fragment>

    )
}

export default Perfil;