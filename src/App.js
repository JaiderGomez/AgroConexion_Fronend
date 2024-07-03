import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Importo componentes
import Menu from './componentes/Menu';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Login from './componentes/usuarios/Login';
import CrearPublicacion from './componentes/publicaciones/CrearPublicacion';
import Perfil from './componentes/usuarios/Perfil';
import Registro from './componentes/usuarios/Registro';
import ActualizarPerfil from './componentes/usuarios/ActualizarPerfil';
//Fin componentes

import store from './store'
//import ProtectedRoute from './ProtectedRoute';

import { loadUser, login } from './actions/userActions';

function App() {

  useEffect(() => {
    store.dispatch(loadUser()) //Envió la acción loadUser; que me permite identificar al usuario
  }, [])

  const {user, isAuthenticated, loading} = useSelector(state => state.auth) //useSelector; 

  return (
    
    <div className="App container-fluid">
    
      <Router>
      <Header />
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/registro' Component={Registro} />
          <Route path='/editar-perfil' Component={ isAuthenticated ? ActualizarPerfil : Login} />
          <Route path='/perfil' Component={ isAuthenticated ? Perfil : Login} />
          <Route path='/home' Component={ isAuthenticated ? Menu : Login} />
          <Route path='/crear-publicacion' Component={ isAuthenticated ? CrearPublicacion : Login} />

          {/*Rutas protegidas
          <Route path="/lista-de-usuarios"
              element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />*/}
         
        </Routes>
        <Footer />


      </Router>
      
    </div>
  );
}

export default App;
