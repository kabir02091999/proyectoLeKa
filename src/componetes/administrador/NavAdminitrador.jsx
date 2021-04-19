import React from 'react';
import {
  Link
  } from "react-router-dom"; 

//stylos
import '../../css/stilosNav.css'

//material ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

//iconos
import HomeIcon from '@material-ui/icons/Home';

//fucion
const maker = makeStyles( theme => ({

  offset:theme.mixins.toolbar,
  boton:{
    marginRight: "10px"
  }

})) 

const NavAdminstradro = () => {

    const est = maker()

    return ( <div>

        <AppBar position="fixed" color="primary">
          <Toolbar>
                <div className="logo">
                    <Typography variant="h4">
                        logo
                    </Typography>
                    <Typography variant="h5">
                        Administrador
                    </Typography>

                </div>
                <div className="botones">

                    <Button className={est.boton} color="inherit" startIcon={<HomeIcon/>}><Link to="/" className="link" >salir al inicio</Link></Button>

                </div>
            </Toolbar>
        </AppBar>

    </div> );
}
 
export default NavAdminstradro;