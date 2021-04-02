import React, {useState} from 'react';
import {
  Link
} from "react-router-dom";
import '../css/stilosNav.css'

//vistas
import Button from '@material-ui/core/Button'
import Login from '../vistas/Login';

//iconos
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

//nav
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Modal} from '@material-ui/core'

//otros
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import theme from '../confing/confingMUI'

//funcion

const maker = makeStyles( theme => ({

  offset: theme.mixins.Toolbar

}))

const stylos = makeStyles({

  boton:{

    marginRight: "10px"

  }

})

const Nav = () => {

  const clases = maker()
  const [modal, setmodal] = useState(false)

  const est = stylos()

  const OpenClos = (modal)=>{

    setmodal(!modal)

  }

    return ( 
      <div>
        <ThemeProvider theme={theme}>
         <AppBar position="fixed" color="primary">
          <Toolbar>
            <div className="logo">
              <Typography variant="h4">
                logo
              </Typography>
            </div>
            <div className="botones">
                
                  <Button className={est.boton} variant="contained" color="primary" startIcon={<AccountCircleIcon/>} onClick={()=>{OpenClos(modal)}} >login</Button>

                  

                  <Button className={est.boton} variant="contained" color="primary" startIcon={<HomeIcon/>}> inicio</Button>

            </div>
            </Toolbar>
          </AppBar> 
          <div className="cambio" ></div>
        </ThemeProvider>
        <Modal 
          open={modal}
          /* onClode={OpenClos} */>

        <Login OpenClos={OpenClos} modal={modal} /> 
        
        </Modal>
    
      </div> );
}
 
export default Nav;
