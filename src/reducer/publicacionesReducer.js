
import {NEW_PUBLICACION_REQUEST, NEW_PUBLICACION_SUCCESS, NEW_PUBLICACION_FAIL, CLEAR_ERRORS} from '../constants/publicacionesConstants'


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