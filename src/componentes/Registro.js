function Registro() {
    return (
        
        <div className="container crear-publicacion">
            <div className="titulo"><h1>Registro de Usuarios</h1></div>
            <form class="row g-3">

                <div class="col-6">
                    <label for="Nombres" class="form-label">Nombres:</label>
                    <input type="text" class="form-control" id="Nombres" placeholder="Ingrese sus nombres" />
                </div>
                <div class="col-6">
                    <label for="Apellidos" class="form-label">Apellidos:</label>
                    <input type="text" class="form-control" id="Apellidos" placeholder="Ingrese sus Apellidos" />
                </div>
                <div class="col-6">
                    <label for="Email" class="form-label">Email:</label>
                    <input type="text" class="form-control" id="Email" placeholder="Ingrese su Email" />
                </div>
                <div class="col-6">
                    <label for="Contraseña" class="form-label">Contraseña:</label>
                    <input type="text" class="form-control" id="Contraseña" placeholder="Ingrese su Contraseña" />
                </div>

                <label for="inputUbicacion" class="form-label inputUbicacion">Direccion:</label>
                <div class="col-4">

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecionar Departamento</option>
                        <option value="1">La Guajira</option>
                        <option value="2">Cesar</option>
                        <option value="3">Magdalena</option>
                    </select>
                </div>
                <div class="col-4">

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecionar Municipio</option>
                        <option value="1">Riohacha</option>
                        <option value="2">Valledupar</option>
                        <option value="3">Maicao</option>
                    </select>
                </div>



                <div class="col-md-4">

                    <input type="text" class="form-control" id="Direccion" placeholder="Direccion" />
                </div>


                <div class="col-md-4">
                <label for="Usuario" class="form-label">Tipo de Usuario:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                        Agricultor
                        </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label class="form-check-label" for="flexRadioDefault2">
                        Comprador
                        </label>
                </div>
                </div>
                <div class="col-md-4">
                <label for="Cumpleaños" class="form-label">Fecha de Nacimiento:</label>
                    <input type="date" class="form-control" id="Cumpleaños" />

                </div>


                <div class="col-md-4">
                    <label for="Contacto" class="form-label">Numero de Contacto:</label>
                    <input type="text" class="form-control" id="Contacto" />
                </div>


                <div class="d-grid gap-2 col-6 mx-auto ">
                    <button class="btn btn-outline-primary" type="button">Registrarse</button>

                </div>
                
            </form>
            <br></br>
        </div>
    )
}

export default Registro;