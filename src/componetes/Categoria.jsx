import React from 'react';

//router
import {
  Link
} from "react-router-dom";

//iconos
import Typography from '@material-ui/core/Typography'

//stylos
import '../css/stilosCategoria.css'


const Categoria = (props) => {
    return ( <div className="container_de_categoria">

        <Link to={props.direccio} className="link" >
        <img  src={props.direccion}  className="container_imagenes" />
        <Typography variant="h6" className="typografia_nombre" >{props.nombre}</Typography></Link>

    </div> );
}
 
export default Categoria;