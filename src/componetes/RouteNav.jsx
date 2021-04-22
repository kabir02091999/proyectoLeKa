import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


//vistas
import Inicio from './Inicio';
import InicioAdministrador from '../vistas/administrador/InicioAdministrador';

//componentes
import Nav from './Nav';
import ErrorBasico from '../vistas/administrador/error/ErrorBasico';


const RouteNav = () => {
  
  /* ojo en el Nav hay que hacer un condicona para direciar el usuario administrador y el super administrador */

  const [usuario, setusuario] = useState({
    nombre:"",
    apellido:"",
    usuario:"",
    mail:"",
    genero:"",
    clave:"",
    tipo:""
  })

  return ( 
    <div>
      
      <Router>

        <Switch>
          
          <Route path='/usuario/administrador'>

            {usuario.tipo==="administrador" ? <InicioAdministrador usuario={usuario} setusuario={setusuario}  /> : <ErrorBasico/> }{/* ojo erro hay que crear una vista e error  */}

          </Route>

          <Route path='/computacion'>
            <Nav setusuario={setusuario} />
            <h1>computacion</h1>
            
          </Route>
          <Route path='/telefonia'>
            <Nav setusuario={setusuario}/>
            <h1>telefonia</h1>
            
          </Route>
          <Route path='/deporte'>
            <Nav setusuario={setusuario}/>
            <h1>deporte</h1>
            
          </Route>
          <Route path='/videos_juegos'>
            <Nav setusuario={setusuario}/>
            <h1>video juegos</h1>
            
          </Route>
          <Route path='/apple'>
            <Nav setusuario={setusuario}/>
            <h1>apple</h1>
            
          </Route>
          <Route path='/android'>
            <Nav setusuario={setusuario}/>
            <h1>apple</h1>
            
          </Route>

          <Route path='/' >
            <Nav setusuario={setusuario}/>
            <Inicio/>

          </Route>
          

        </Switch>

      </Router>
      
    </div> );
}
 
export default RouteNav;