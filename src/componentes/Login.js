function Login(){
    return(
      
      <div className="container sm">
       <form>
            <h1 class="title-login">Accede</h1>
            <p class="DM-Sans">Inicia sesión para continuar</p>
            <p class="DM-Sans inp-text">CORREO ELECTRÓNICO:</p>
            <input type="email" class="form-control" id="inputEmail3"/>
            
            <br></br><p class="DM-Sans inp-text">CLAVE:</p>
            <input type="email" class="form-control" id="inputEmail3"/>
               
           <br></br>
           <a href="/Registro">Registro Para Nuevos Usuarios</a>
           <br></br>
            <button type="submit" class="btn bgcolorbtn">Ingresar</button>
        </form>
        </div>
    )
}

export default Login;