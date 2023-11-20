function CrearPublicacion() {
    return (
        <div className="container crear-publicacion">
            <div className="titulo"><h1>Crear Publicacion</h1></div>
            <form class="row g-3">
                <div class="col-12">
                    <label for="inputname" class="form-label">Nombre del Producto:</label>
                    <input type="text" class="form-control" id="inputname" placeholder="Ej. Maiz, Frijol, Arroz..." />
                </div>
                <div class="col-md-6">
                    <label for="inputCantidad" class="form-label">Cantidad:</label>
                    <input type="number" min={1} class="form-control" id="inputCantidad" />
                </div>
                <div class="col-md-6">
                    <label for="inputFechadeRecolecta" class="form-label">Fecha de Recolecta:</label>
                    <input type="date" class="form-control" id="inputFechadeRecolect" />
                </div>
                <label for="inputUbicacion" class="form-label inputUbicacion">Ubicacion de la Cosecha:</label>
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
                <label class="form-label inputUbicacion">Ingrese Fotos y/o videos del cultivo:</label>

                <div class="col-md-4">

                    <input type="file" accept="image/*,video/*" class="form-control" id="inputfile" />
                </div>
                <div class="col-md-4">

                    <input type="file" accept="image/*,video/*" class="form-control" id="inputfile" />
                </div>
                <div class="col-md-4">

                    <input type="file" accept="image/*,video/*" class="form-control" id="inputfile" />
                </div>

                <div class="col-md-6">
                    <label for="inputprecio" class="form-label">Precio por Hectarea:</label>
                    <input type="number" min={1} class="form-control" id="inputprecio" />
                </div>


                <div class="mb-3">
                    <label for="Detalles" class="form-label">Detalles:</label>
                    <textarea class="form-control" id="Detalles" rows="5">Ingrese detalles de su cultivo</textarea>
                </div>

               
                <div class="d-grid gap-2 col-6 mx-auto ">
                    <button class="btn btn-outline-primary" type="button">Publicar</button>

                </div>

            </form>
            <br></br>

        </div>
    )
}

export default CrearPublicacion;