import React , {Fragment, useState, useEffect} from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { newPublicacion, clearErrors } from '../../actions/publicacionesActions';
import {useNavigate} from "react-router-dom"


export const CrearPublicacion = () => {

    
    const {user} = useSelector(state => state.auth) //Captura del usuario desde el estado

   
    const [post, setPost]= useState({
        nombre_del_producto: "",
        cantidad: 0,
        ciudad: "",
        direccion: "",
        departamento: "",
        precio_por_hectarea: 0,
        detalles: "",
        autor : user,
        fecha_de_recolecta: "",
        archivos_adjuntos: "",
    })

    const navigate=useNavigate();

    const alert = useAlert();

    const {nombre_del_producto, ciudad, cantidad, direccion, departamento, precio_por_hectarea, detalles, autor, fecha_de_recolecta, archivos_adjuntos} = post;
    const dispatch= useDispatch();
    const {success, loading, error} = useSelector(state => state.newPost)  //Variables de estado

    

    useEffect( () => {
        if(success){
            alert.success("Publicacion creado con éxito")
            navigate('/home')
        }
        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }
    }, [dispatch, success, error, alert, navigate])


    const submitHandler = (e) =>{
        e.preventDefault();   

        dispatch(newPublicacion(post))
    }
    
    const onChange = e =>{
        setPost({ ...post, [e.target.name] : e.target.value});
    }

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <div className="container crear-publicacion">
                    <div className="titulo"><h1>Crear Publicacion</h1></div>
                    <form class="row g-3" onSubmit={submitHandler}>
                        <div class="col-12">
                            <label for="inputname" class="form-label">Nombre del Producto:</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="inputname" 
                                placeholder="Ej. Maiz, Frijol, Arroz..." 
                                name='nombre_del_producto'
                                value={nombre_del_producto}
                                onChange={onChange}
                            />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCantidad" class="form-label">Cantidad (Hectáreas):</label>
                            <input 
                                type="number" 
                                min={1} 
                                class="form-control" 
                                id="inputCantidad" 
                                name='cantidad'
                                onChange={onChange}
                                value={cantidad}
                            />
                        </div>
                        <div class="col-md-6">
                            <label for="inputFechadeRecolecta" class="form-label">Fecha de Recolecta:</label>
                            <input 
                                type="date" 
                                class="form-control" 
                                id="inputFechadeRecolect" 
                                name='fecha_de_recolecta'
                                value={fecha_de_recolecta}
                                onChange={onChange}
                            />
                        </div>
                        <label for="inputUbicacion" class="form-label inputUbicacion">Ubicación de la Cosecha:</label>
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

                        <label class="form-label inputUbicacion">Ingrese url de Foto del cultivo: Subir img aquí https://postimages.org/</label>

                        <div class="col-md-12">

                            <input 
                                type="text" 
                                class="form-control" 
                                id="archivos_adjuntos" 
                                name='archivos_adjuntos'
                                value={archivos_adjuntos}
                                onChange={onChange}
                            />
                        </div>
                

                        <div class="col-md-6">
                            <label for="inputprecio" class="form-label">Precio por Hectárea:</label>
                            <input 
                                type="number" 
                                min={1} 
                                class="form-control" 
                                id="inputprecio" 
                                name='precio_por_hectarea'
                                value={precio_por_hectarea}
                                onChange={onChange}
                            />
                        </div>


                        <div class="mb-3">
                            <label for="Detalles" class="form-label">Detalles:</label>
                            <textarea class="form-control" id="Detalles" rows="5"  name='detalles' value={detalles} onChange={onChange}>Ingrese detalles de su cultivo</textarea>
                        </div>

                    
                        <div class="d-grid gap-2 col-6 mx-auto ">
                            <button class="btn btn-outline-primary" type="submit">Publicar</button>

                        </div>

                    </form>

                </div> 
            </Fragment>
        )}
        
        </Fragment>
    )
}

export default CrearPublicacion;