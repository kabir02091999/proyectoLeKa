import React, {useState} from 'react';
/* import {
  Link
} from "react-router-dom"; */
import '../css/stilosNav.css'

//vistas
import Button from '@material-ui/core/Button'
import Login from '../vistas/Login';

//iconos
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//nav
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Modal} from '@material-ui/core'

//otros
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import theme from '../confing/confingMUI'
import Registro from '../vistas/Registro';

//funcion

/* const maker = makeStyles( theme => ({

  offset: theme.mixins.Toolbar

})) */

const stylos = makeStyles({

  boton:{

    marginRight: "10px"

  }

})

const Nav = () => {

 
  const [modal, setmodal] = useState(false)
  const [modalRegistro, setmodalRegistro] = useState(false)

  const est = stylos()

  const openClos = ()=>{
    
    setmodal(!modal)

  }

  const openCloseRegistro=()=>{
    
    setmodalRegistro(!modalRegistro)

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
                
              <Button className={est.boton} variant="contained" color="primary" startIcon={<AccountCircleIcon/>} onClick={()=>{openClos()}} >login</Button>

              <Button className={est.boton} variant="contained" color="primary" startIcon={<PersonAddIcon/>} onClick={()=>{openCloseRegistro()}} >register</Button>

              <Button className={est.boton} variant="contained" color="primary" startIcon={<HomeIcon/>}> inicio</Button>

            </div>
            </Toolbar>
          </AppBar> 
          <div className="cambio" ></div>
        </ThemeProvider>
        
        <Modal 
        open={modal}
        onClose={openClos}>

            <div>
              <Login openClos={openClos}  />  
            </div>
        
        </Modal>
        <Modal
        open={modalRegistro}
        onClose={openCloseRegistro}
        >

          <div>

            <Registro openCloseRegistro={openCloseRegistro} />

          </div>

        </Modal>
        
      </div> );
}
 
export default Nav;
