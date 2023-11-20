import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Login from './componentes/Login';
import CrearPublicacion from './componentes/CrearPublicacion';
import Perfil from './componentes/Perfil';
import Registro from './componentes/Registro';

function App() {
  return (
    
    <div className="App container-fluid">
    <Header />
      <Router>
        <Routes>
          <Route path='/home' Component={Menu} />
          <Route path='/' Component={Login} />
          <Route path='/CrearPublicacion' Component={CrearPublicacion} />
          <Route path='/Perfil' Component={Perfil} />
          <Route path='/Registro' Component={Registro} />
         
        </Routes>

      </Router>
    <Footer />
    </div>
  );
}

export default App;
