import React from 'react';
import {
  useHistory
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

  boton:{
    marginRight: "10px"
  }
  ,appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },di:{

        display: 'inline-block',
    }

})) 

const NavAdminstradro = (props) => {

    const historia=useHistory()
    const est = maker()

    const salir = ()=>{
        historia.push("/")
        props.setusuario("")
    }

    return ( <div className={est.di} >

        <AppBar className={est.appBar} position="fixed" color="secondary">
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

                    <Button className={est.boton} color="inherit" startIcon={<HomeIcon/>} onClick={()=>(salir())} >salir al inicio</Button>

                </div>
            </Toolbar>
        </AppBar>

    </div> );
}
 
export default NavAdminstradro;