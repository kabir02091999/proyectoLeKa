import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//vistas
import Login from '../vistas/Login';
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

              {/* <Login/> */}

            </Route>
            
            <Route path='/' >

              <Inicio/>

            </Route>

          </Switch>

        </Router>
        
      </div> );
}
 
export default RouteNav;