import React, {Fragment, useEffect} from 'react'
import {clearErrors, getPublicaciones } from "../actions/publicacionesActions"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

export const Menu = () => {
    const {loading, publicaciones, error} = useSelector(state => state.publicaciones)
   

    const dispatch = useDispatch();
    const alert = useAlert();


    useEffect(() => {
        dispatch(getPublicaciones());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])    

    return(
        
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                
                <div class="container">
                    <h1>Publicaciones</h1>
                    <br></br>

        
                    

                    
                    {publicaciones.map(post => 


                        <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5 ml-1">
                            <img src={post.archivos_adjuntos} class="img-fluid rounded-start" alt="Foto no disponible"/>
                            </div>
                            <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">{post.nombre_del_producto} </h5>
                                <p class="card-text">{post.detalles}</p>
                                <p class="card-text"><b>Ubicación del cultivo: </b> {post.ciudad} {post.departamento} {post.direccion} <br></br> <b>Agricultor: </b>{post.autor.nombres} {post.autor.apellidos}</p> 
                                <p class="card-text"><b>Fecha de recolecta:</b> {String(post.fecha_de_recolecta).substring(0, 10)}</p>
                                <b>Precio por hectárea: </b> <button type="button" class="btn btn-info">$ {post.precio_por_hectarea}</button> <b>Disponible: </b> <button type="button" class="btn btn-info">{post.cantidad}</button> <small>Hectárea</small>
                                <br/><br/><a class="btn btn-success" href={'https://wa.me/57'+post.autor.telefono} role="button" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg> Contactar con el agricultor
                                </a>

                                
                            </div>
                                </div>
                        </div>
                        </div>                     
                )}
                    
                    
                    
                 

                </div>
                </Fragment>
            
            )}
        </Fragment>
    );

};

export default Menu;