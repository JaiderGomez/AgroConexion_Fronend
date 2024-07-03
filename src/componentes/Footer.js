function Footer(){
    return(
        <div class="footer bgcolor-footer mt-5">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ">
                <div class="col mb-3">
               
                <p class="text-muted">Agro Conexión © 2024</p>
                <p class="text-muted">Análisis y Desarrollo de Software. (2675784)</p>
                <p class="text-muted">By Jaider Gomez</p>
                </div>

                <div class="col mb-3">
                <h5>Agricultor</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/home" class="nav-link p-0 text-muted">Menu Principal</a></li>
                    <li class="nav-item mb-2"><a href="/crear-publicacion" class="nav-link p-0 text-muted">Crear Publicacion</a></li>
                    <li class="nav-item mb-2"><a href="/perfil" class="nav-link p-0 text-muted">Perfil</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Login</a></li>
                    <li class="nav-item mb-2"><a href="/registro" class="nav-link p-0 text-muted">Registro</a></li>
                </ul>
                </div>

                <div class="col mb-3">
                <h5>Comprador</h5>
                <ul class="nav flex-column">
                    
                </ul>
                </div>

                <div class="col mb-3">
                <h5>Admin</h5>
                <ul class="nav flex-column">
                 
                </ul>
                </div>
            </footer>
        </div>

    );
}

export default Footer;