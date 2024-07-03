import React, {Fragment, useEffect, useState } from 'react'
//import MetaData from '../layout/MetaData'
import { Link, useNavigate } from "react-router-dom"
import {clearErrors } from "../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

export const Menu = () => {

    return(
        
        <div class="container">
        <h1>Mis Publicaciones</h1>
            <br></br>
            
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="https://i.postimg.cc/MZn5sBJ9/frijol-rosa-crema.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Frijol Rosado</h5>
                        <p class="card-text">Leguminosa originaria del continente americano, específicamente de países como México, Perú, y algunas zonas de Norte América. Existen más de 35 especies, sin embargo, comercialmente las más conocidas son Phaseolus vulgaris, Phaseolus lunatus, Phaseolus coccineus, Phaseolus acutifolius.</p>
                        <p class="card-text"><small class="text-body-secondary">Ultima Actualizacion 15/Agosto/2023</small></p>
                        <button class="btn btn-primary btn-mar" type="submit">Editar</button>
                        <button class="btn btn-danger" type="submit">Eliminar</button>
                    </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="https://i.postimg.cc/MZn5sBJ9/frijol-rosa-crema.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Frijol Rosado</h5>
                        <p class="card-text">Leguminosa originaria del continente americano, específicamente de países como México, Perú, y algunas zonas de Norte América. Existen más de 35 especies, sin embargo, comercialmente las más conocidas son Phaseolus vulgaris, Phaseolus lunatus, Phaseolus coccineus, Phaseolus acutifolius.</p>
                        <p class="card-text"><small class="text-body-secondary">Ultima Actualizacion 15/Agosto/2023</small></p>
                        <button class="btn btn-primary btn-mar" type="submit">Editar</button>
                        <button class="btn btn-danger" type="submit">Eliminar</button>
                    </div>
                    </div>
                </div>
            </div>

            
        </div>
    );

};

export default Menu;