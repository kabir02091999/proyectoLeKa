import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//vistas
import Login from '../vistas/Login';


//componentes
import Nav from './Nav';


const RouteNav = () => {
    return ( 
      <div>
        
        <Router>
  
          <Nav/>

          <Switch>

            <Route path='/login'>

              <Login/>

            </Route>
            
            <Route path='/' >

              <h1>inicio y que tal</h1>

            </Route>

          </Switch>

        </Router>
        
      </div> );
}
 
export default RouteNav;