import React , {Fragment, useState, useEffect} from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import {register, clearErrors} from "../actions/userActions"
import {useNavigate} from "react-router-dom"


export const Registro = () => {

    const [user, setUser]= useState({
        nombres: "",
        apellidos: "",
        email: "",
        clave: "",
        departamento: "",
        ciudad: "",
        direccion: "",
        rol: "",
        telefono: "",
    })

    const navigate=useNavigate();

    const {nombres, apellidos, email, clave, departamento, ciudad, direccion, rol, telefono} = user;
    const alert= useAlert();
    const dispatch= useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error, alert, navigate])



    const submitHandler = (e) =>{
        e.preventDefault();

        const formData= new FormData();
        formData.set("nombres", nombres);
        formData.set("apellidos", apellidos);
        formData.set("email", email);
        formData.set("clave", clave);
        formData.set("departamento", departamento);
        formData.set("ciudad", ciudad);
        formData.set("direccion", direccion);
        formData.set("rol", rol);
        formData.set("telefono", telefono);
        

        dispatch(register(formData))
    }
    
    const onChange = e =>{
        setUser({ ...user, [e.target.name] : e.target.value});
    }


    return (


        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>

    
                <div className="container crear-publicacion">
                    <div className="titulo"><h1>Registro de Usuarios</h1></div>
                        <form class="row g-3" onSubmit={submitHandler}>

                            <div class="col-6">
                                <label for="Nombres" class="form-label">Nombres:</label>
                                <input 
                                    type="name" 
                                    class="form-control" 
                                    id="Nombres" 
                                    placeholder="Ingrese sus nombres" 
                                    name="nombres"
                                    value={nombres} 
                                    onChange={onChange}
                                />
                            </div>
                            <div class="col-6">
                                <label for="Apellidos" class="form-label">Apellidos:</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="Apellidos" 
                                    placeholder="Ingrese sus Apellidos" 
                                    name="apellidos" 
                                    value={apellidos} 
                                    onChange={onChange} 
                                />
                            </div>
                            <div class="col-6">
                                <label for="Email" class="form-label">Email:</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="Email" 
                                    placeholder="Ingrese su Email" 
                                    name="email" 
                                    value={email} 
                                    onChange={onChange} 
                                />
                            </div>
                            <div class="col-6">
                                <label for="Contraseña" class="form-label">Contraseña:</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="Contraseña" 
                                    placeholder="Ingrese su Contraseña" 
                                    name="clave" 
                                    value={clave} 
                                    onChange={onChange} 
                                />
                            </div>

                            <label for="inputUbicacion" class="form-label inputUbicacion">Direccion:</label>
                            <div class="col-4">

                            <input 
                                type="text" 
                                class="form-control" 
                                id="departamento" 
                                placeholder="Ingrese su departamento" 
                                name="departamento" 
                                value={departamento} 
                                onChange={onChange} 
                            />
                            </div>
                            
                            <div class="col-4">

                            <input 
                                type="text" 
                                class="form-control" 
                                id="ciudad" 
                                placeholder="Ingrese su ciudad" 
                                name="ciudad" 
                                value={ciudad} 
                                onChange={onChange}
                            />
                            </div>



                            <div class="col-md-4">

                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="Direccion" 
                                    placeholder="Dirección" 
                                    name="direccion" 
                                    value={direccion} 
                                    onChange={onChange}
                                />
                            </div>


                            <div class="col-md-4">
                            <label for="Contacto" class="form-label">Ingrese rol: agricultor o comprador</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="rol" 
                                    placeholder="Ingrese rol: agricultor o comprador" 
                                    name="rol"
                                    value={rol} 
                                    onChange={onChange}
                                />
                            </div>


                            
                        
                            <div class="col-md-4">
                                <label for="Contacto" class="form-label">Numero de Contacto:</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="Contacto" 
                                    name="telefono" 
                                    value={telefono} 
                                    onChange={onChange}
                                />
                            </div>


                            <div class="d-grid gap-2 col-6 mx-auto ">
                                <button class="btn btn-outline-primary" type="submit" id="register_button">Registrarse</button>

                            </div>
                            
                        </form>
                    <br></br>
                </div>
        </Fragment>
        )}
        </Fragment>
    )
}

export default Registro;