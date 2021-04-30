import React from 'react';
import
{TableCell,TableRow}
from '@material-ui/core'

const UsuarioAd = (props) => {
    return ( 
    
    <TableRow>
    
        <TableCell>{props.usuario.id}</TableCell>
        <TableCell>{props.usuario.name}</TableCell>
        <TableCell>{props.usuario.status}</TableCell>
        <TableCell>{props.usuario.species}</TableCell>
        <TableCell>{props.usuario.type}</TableCell>
        <TableCell>{props.usuario.gender}</TableCell>
        <TableCell>{props.usuario.created}</TableCell>
        <TableCell>{/* {props.usuario.tipo} */}</TableCell> 

    </TableRow> );
}
 
export default UsuarioAd;