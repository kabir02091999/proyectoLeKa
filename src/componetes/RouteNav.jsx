import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//vistas
import Inicio from './Inicio';


//componentes
import Nav from './Nav';


const RouteNav = () => {
    return ( 
      <div>
        
        <Router>
  
          <Nav/>

          <Switch>

            <Route path='/login'>

            </Route>
            
            <Route path='/computacion'>

              <h1>computacion</h1>
              
            </Route>
            <Route path='/telefonia'>

              <h1>telefonia</h1>
              
            </Route>
            <Route path='/deporte'>

              <h1>deporte</h1>
              
            </Route>
            <Route path='/videos_juegos'>

              <h1>video juegos</h1>
              
            </Route>
            <Route path='/apple'>

              <h1>apple</h1>
              
            </Route>
            <Route path='/android'>

              <h1>apple</h1>
              
            </Route>

            <Route path='/' >

              <Inicio/>

            </Route>
            

          </Switch>

        </Router>
        
      </div> );
}
 
export default RouteNav;