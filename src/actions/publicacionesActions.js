//CONSTANTES
import {NEW_PUBLICACION_REQUEST, NEW_PUBLICACION_SUCCESS, NEW_PUBLICACION_FAIL, CLEAR_ERRORS, GET_PUBLICACIONES_REQUEST, GET_PUBLICACIONES_FAIL, GET_PUBLICACIONES_SUCCESS} from '../constants/publicacionesConstants'

import axios from 'axios'

//Api URl
const apiUrl = process.env.REACT_APP_API_URL;


//crear nuevas publicaciones
export const newPublicacion = (newPost) => async (dispatch)=>{
    try {
        dispatch({type: NEW_PUBLICACION_REQUEST})

        const config ={ 
            header: { 
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post(`${apiUrl}/api/crearPublicacion`, newPost, config)

        dispatch({
            type: NEW_PUBLICACION_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: NEW_PUBLICACION_FAIL,
            payload: error
        })
    }
}



//Consultar las  publicaciones
export const getPublicaciones = () => async (dispatch)=>{
    try {
        dispatch({type: GET_PUBLICACIONES_REQUEST})


        const {data} = await axios.get(`${apiUrl}/api/publicaciones`)

        dispatch({
            type: GET_PUBLICACIONES_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_PUBLICACIONES_FAIL,
            payload: error
        })
    }
}

//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
