
import {NEW_PUBLICACION_REQUEST, NEW_PUBLICACION_SUCCESS, NEW_PUBLICACION_FAIL, CLEAR_ERRORS, GET_PUBLICACIONES_FAIL, GET_PUBLICACIONES_REQUEST, GET_PUBLICACIONES_SUCCESS} from '../constants/publicacionesConstants'


export const newPublicacionReducer = (state={ publicacion:{} }, action )=>{
    switch(action.type){

        case NEW_PUBLICACION_REQUEST:
            return{
                ...state,
                loading: true
            }

        case NEW_PUBLICACION_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                publicacion: action.payload.newPost
            }

        case NEW_PUBLICACION_FAIL:
            return{
                ...state,
                error:action.payload.message
            }
            
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}
export const getPublicacionesReducer = (state={ publicaciones:[] }, action )=>{
    switch(action.type){

        case GET_PUBLICACIONES_REQUEST:
            return{
                ...state,
                loading: true
            }

        case GET_PUBLICACIONES_SUCCESS:
            return {
                loading: false,
                publicaciones: action.payload.getPublicaciones
            }

        case GET_PUBLICACIONES_FAIL:
            return{
                ...state,
                error:action.payload
            }
            
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}