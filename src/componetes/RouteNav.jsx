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


const RouteNav = () => {
    
  const [usuario, setusuario] = useState("")

  return ( 
    <div>
      
      <Router>

        <Switch>
          
          <Route path='/usuario/administrador'>

            {usuario==="administrador" ? <InicioAdministrador/> : <h1>error</h1>}

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