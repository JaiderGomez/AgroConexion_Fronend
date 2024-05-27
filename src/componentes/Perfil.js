function Perfil() {
    return (
        <div className="container">


            <h1>Jaider De Jesus Gomez Ortega</h1>
            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-3 bd-highlight">

                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="rounded float-start" alt="Foto Perfil" width="200rem" />
                </div>

                <div class="p-3 bd-highlight">
                    <p className="text-perfil">
                    Agricultor con más de 5 años de experiencia en el campo. Estudiante de Agronomía con un gran interés en la producción de alimentos. Poseo una gran capacidad para adaptarme a todo tipo de entornos y aportar siempre lo mejor de mí. Me caracterizo por mi facilidad para el trabajo en equipo y mi entusiasmo por aprender y desarrollar mis habilidades. Estoy buscando una oportunidad laboral en la que adquirir más experiencia y seguir desarrollando mis conocimientos en el campo de la agricultura.
                    </p>
                </div>
            </div>
            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-3 bd-highlight">
                    <p><span className="text-perfil2">Direccion:</span> Hatonuevo La Guajira, Calle 55 #27-38 SUR</p>
                </div>
                <div class="p-3 bd-highlight">
                    <p><span className="text-perfil2">Fecha de Nacimiento:</span> 06 Febrero</p>
                </div>
                <div class="p-3 bd-highlight">
                    <p><span className="text-perfil2">Numero de Celular:</span> 317328999</p>
                </div>
                <div class="p-3 bd-highlight">
                    <p><span className="text-perfil2">Email:</span> jdmd@gmail.com</p>
                </div>

                
            </div>
            <button type="button" class="btn btn-outline-info">Editar Perfil</button>
                  </div>

    )
}

export default Perfil;