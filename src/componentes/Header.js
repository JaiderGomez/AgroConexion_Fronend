function Header() {
    return(

        <div className="header bgcolor">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="letra" href="/">Agro Conexión</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <br></br>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active text-header" aria-current="page" href="/home">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active text-header" aria-current="page" href="/CrearPublicacion">Crear Publicacion</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active text-header" aria-current="page" href="/Perfil">Mí Perfil</a>
                        </li>
                        <li class="nav-item dropdown text-header" >
                        <a class="nav-link dropdown-toggle text-header" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Herramientas
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">Estado del Clima</a></li>
                            <li><a class="dropdown-item" href="/">Guías de Cultivo</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="/">Ayuda</a></li>
                        </ul>
                        </li>
                                            </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
                </nav>

        </div>

    );
}


export default Header;
