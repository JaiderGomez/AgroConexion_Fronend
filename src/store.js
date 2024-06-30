//importo de la librería redux, la fun createStore; permite crear la store que es la encargada de centralizar los estados de la app,
/*combineReducers; La función combineReducers devuelve un objeto cuyos valores son diferentes funciones reductoras 
en una única función reductora que puedes enviar a createStore.*/
import { createStore, combineReducers, applyMiddleware } from 'redux';

//Redux Thunk es un middleware que nos permite retornar funciones, en lugar de solo acciones en Redux. 
//Esto nos permite trabajar con acciones retrasadas y promesas.
import {thunk} from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';

//Importo todos los reducer de las publicaciones
//import { productsReducer, productDetailsReducer, newProductReducer, productReducer, newReviewReducer, productReviewsReducer, reviewReducer } from './reducer/productReducer';

//Import para los reducer de usuarios y el proceso de autenticación
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducer/userReducer'

//combino los reducer
const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
})

const middleware = [thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;