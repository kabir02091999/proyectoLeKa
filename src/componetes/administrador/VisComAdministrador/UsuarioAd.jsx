import React from 'react';
import
{TableCell,TableRow}
from '@material-ui/core'

const UsuarioAd = (props) => {
    return ( <TableRow>
        <TableCell>1</TableCell>
        <TableCell>{props.usuario.nombre}</TableCell>
        <TableCell>{props.usuario.apellido}</TableCell>
        <TableCell>{props.usuario.usuario}</TableCell>
        <TableCell>{props.usuario.mail}</TableCell>
        <TableCell>{props.usuario.genero}</TableCell>
        <TableCell>{props.usuario.clave}</TableCell>
        <TableCell>{props.usuario.tipo}</TableCell> 

    </TableRow> );
}
 
export default UsuarioAd;