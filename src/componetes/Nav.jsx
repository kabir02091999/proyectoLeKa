import React, {useState} from 'react';
 import {
  Link
  } from "react-router-dom"; 
import '../css/stilosNav.css'

//vistas
import Login from '../vistas/Login';
import ComprCorreo from '../vistas/ComCorreo';

//iconos
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuIcon from '@material-ui/icons/Menu';

//nav
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {Typography,Hidden,IconButton} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {Modal} from '@material-ui/core'

//otros
import {makeStyles} from '@material-ui/core/styles'
import Registro from '../vistas/Registro';
import CajonInicio from './CajonInicio';
import CajonAdministrador from './administrador/CajonAdministrador';

//funcion
 const maker = makeStyles( theme => ({

  root: {
    display: 'flex',
  },
  offset:theme.mixins.toolbar,
  boton:{
    marginRight: "10px"
  },
  IcoMenu:{

    color:"honeydew"

  },appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }

})) 

const Nav = (props) => {

  const [modal, setmodal] = useState(false)
  const [modalRegistro, setmodalRegistro] = useState(false)
  const [comcorreo, setcomcorreo] = useState(false)
  const [menu, setmenu] = useState(false)

  const est = maker()

  const openClosMenu = ()=>{
    setmenu(!menu)
    console.log(menu)
  }

  const openClos = ()=>{
    setmodal(!modal)
  }

  const openCloseRegistro=()=>{
    setmodalRegistro(!modalRegistro)
  }

  const openclosecorreo = ()=>{
    setcomcorreo(!comcorreo)
  }

    return ( 
      <div className={est.root}>
        
        <AppBar position="fixed" color="primary" className={est.appBar}>
          <Toolbar>
            <div className="logo">
              <Typography variant="h4">
                logo
              </Typography>
            </div>
            <div className="botones">
              
              <Hidden xsDown>
                <Button className={est.boton} color="inherit" startIcon={<AccountCircleIcon/>} onClick={()=>{openClos()}} >login</Button>

                <Button className={est.boton}  color="inherit" startIcon={<PersonAddIcon/>} onClick={()=>{openCloseRegistro()}} >register</Button>
                
                <Button className={est.boton} color="inherit" startIcon={<HomeIcon/>}><Link to="/" className="link" >inicio</Link></Button>
              
              </Hidden>

              <Hidden smUp>
                {/* ojo aqui va el icono menu */}
                
                
                <Modal 
                open={menu}
                onClose={openClosMenu}
                >

                  <CajonInicio openClosMenu={openClosMenu} />

                </Modal>
                <IconButton aria-label="canselar" className={est.IcoMenu} onClick={()=>{openClosMenu()
                console.log(menu)
                }} > < MenuIcon/> </IconButton>
              
              </Hidden>

            </div>
        </Toolbar>
      </AppBar> 
          
      <div className={est.offset} ></div>
        
        <Modal
        open={modal}
        onClose={openClos}>

          <div>
            <Login openClos={openClos} setusuario={props.setusuario}  />  
          </div>
        
        </Modal>
        <Modal
        open={modalRegistro}
        onClose={openCloseRegistro}
        className="hola"
        >
          <div>
            <Registro openCloseRegistro={openCloseRegistro} openclosecorreo={openclosecorreo} />
          </div>
        </Modal>
        <Modal
        open={comcorreo}
        onClose={openclosecorreo}
        >
          <div>
            <ComprCorreo openclosecorreo={openclosecorreo}/>
          </div>
        </Modal>
      
      </div> );
}
 
export default Nav;
