import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Importo componentes
import Menu from './componentes/Menu';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Login from './componentes/Login';
import CrearPublicacion from './componentes/CrearPublicacion';
import Perfil from './componentes/Perfil';
import Registro from './componentes/Registro';
//Fin componentes

import store from './store'
//import ProtectedRoute from './ProtectedRoute';

import { loadUser } from './actions/userActions';

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
          <Route path='/home' Component={Menu} />
          <Route path='/' Component={Login} />
          <Route path='/CrearPublicacion' Component={CrearPublicacion} />
          <Route path='/Perfil' Component={Perfil} />
          <Route path='/Registro' Component={Registro} />

          {/*Rutas protegidas
          <Route path="/lista-de-usuarios"
              element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />*/}
         
        </Routes>

        {!loading && (!isAuthenticated || user.role!=="admin") &&( 
          <Footer />
        )}

      </Router>
      
    </div>
  );
}

export default App;
