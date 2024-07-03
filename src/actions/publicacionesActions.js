//CONSTANTES
import {NEW_PUBLICACION_REQUEST, NEW_PUBLICACION_SUCCESS, NEW_PUBLICACION_FAIL, CLEAR_ERRORS} from '../constants/publicacionesConstants'

import axios from 'axios'


//crear nuevas publicaciones
export const newPublicacion = (newPost) => async (dispatch)=>{
    try {
        dispatch({type: NEW_PUBLICACION_REQUEST})

        const config ={ 
            header: { 
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/api/crearPublicacion', newPost, config)

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

//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}