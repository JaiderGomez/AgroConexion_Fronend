import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAlert } from "react-alert"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'


export const ActualizarPerfil = () => {

    //Función para redirigir a una url
    const navigate = useNavigate();

    //Defino las variables de estados con el estado inicial
    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [departamento, setDepartamento] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [direccion, setDireccion] = useState("")
    const [fecha_de_nacimiento, setFecha_de_nacimiento] = useState("")
    const [telefono, setTelefono] = useState("")
    
    
    
    const alert = useAlert(); //Generar alertas
    const dispatch = useDispatch(); //Para el de datos

    const { user } = useSelector(state => state.auth) //Capturo la información del usuario desde el estado
    const { error, isUpdated, loading } = useSelector(state => state.user)

    
    useEffect(() => {
        if (user) {
            setNombres(user.nombres);
            setApellidos(user.apellidos);
            setDepartamento(user.departamento);
            setCiudad(user.ciudad);
            setDireccion(user.direccion);
            setTelefono(user.telefono);
            setFecha_de_nacimiento(user.fecha_de_nacimiento);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            alert.success("Perfil actualizado correctamente");
            dispatch(loadUser());

            navigate("/perfil");

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated, user, navigate])

    
    //Función que se ejecuta cuando el usuario hace click al botón del form
    const submitHandler = (e) => {
        e.preventDefault();

        //Le damos formato a los datos
        const formData = new FormData();
        formData.set("nombres", nombres);
        formData.set("apellidos", apellidos);
        formData.set("departamento", departamento);
        formData.set("ciudad", ciudad);
        formData.set("direccion", direccion);
        formData.set("telefono", telefono);
        formData.set("fecha_de_nacimiento", fecha_de_nacimiento);

        //Envió de datos
        dispatch(updateProfile(formData, user._id))
    }

    return (
        <Fragment>
                    {/*<!-- Button para abrir modal -->*/}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Editar Perfil
                    </button>

                    {/*<!-- Modal -->*/}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Mi Perfil</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={submitHandler}>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nombres</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="nombres" 
                                        name='nombres' 
                                        value={nombres} 
                                        onChange={(e) => setNombres(e.target.value)} 
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Apellidos</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="apellidos" 
                                        name='apellidos' 
                                        value={apellidos} 
                                        onChange={(e) => setApellidos(e.target.value)} 
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Departamento</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="departamento" 
                                        name='departamento' 
                                        value={departamento} 
                                        onChange={(e) => setDepartamento(e.target.value)} 
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Ciudad</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="ciudad" 
                                        name='ciudad' 
                                        value={ciudad} 
                                        onChange={(e) => setCiudad(e.target.value)} 
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Dirección</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="direccion" 
                                        name='direccion' 
                                        value={direccion} 
                                        onChange={(e) => setDireccion(e.target.value)} 
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">N° Celular</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="telefono" 
                                        name='telefono' 
                                        value={telefono} 
                                        onChange={(e) => setTelefono(e.target.value)} 
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Fecha de Nacimiento</label>
                                    <input 
                                        type="date" 
                                        class="form-control" 
                                        id="fecha_de_nacimiento" 
                                        name='fecha_de_nacimiento' 
                                        value={fecha_de_nacimiento} 
                                        onChange={(e) => setFecha_de_nacimiento(e.target.value)} 
                                    />
                                </div>

                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                                </div>

                                </form>                     
                                                                    

                             </div>
                        
                        </div>

                    </div>
                    </div>
        </Fragment>
    )
}


export default ActualizarPerfil;
                     