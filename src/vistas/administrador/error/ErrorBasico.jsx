import React from 'react';

//navar componete
import Nav from '../../../componetes/Nav';

//materia ui 
import {makeStyles} from '@material-ui/core/styles'

//imagen
import Erroraa from '../../../imagenes/error.jpg'

const estylos = makeStyles((theme)=>({

    imagen:{

        height:"100%",
        width:"100%"

    },divimagent:{

        height:"800px",
        width:"1000px",
        margin: "auto"

    }

}))

const ErrorBasico = () => {
    
    const classes=estylos()
    
    return ( <div>

        <Nav/>
        <div className={classes.divimagent}>

            <img src={Erroraa} alt="imagen" className={classes.imagen} />

        </div>

    </div> );
}
 
export default ErrorBasico;