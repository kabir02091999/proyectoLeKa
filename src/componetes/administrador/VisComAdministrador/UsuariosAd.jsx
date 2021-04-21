import React from 'react';

//materi ui
import {TableContainer,
        Table,
        TableHead,
        TableRow,
        TableCell,
        TableBody} from '@material-ui/core'

const UsuariosAd = () => {
    return ( <div>
        
        <h1>usuarios</h1>
        <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>nombre</TableCell>
                            <TableCell>apellido</TableCell>
                            <TableCell>usuario</TableCell>
                            <TableCell>mail</TableCell>
                            <TableCell>genero</TableCell>
                            <TableCell>clave</TableCell>
                            <TableCell>tipo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {/* <TableCell>{props.usuario.nombre}</TableCell>
                            <TableCell>{props.usuario.apellido}</TableCell>
                            <TableCell>{props.usuario.usuario}</TableCell>
                            <TableCell>{props.usuario.mail}</TableCell>
                            <TableCell>{props.usuario.genero}</TableCell>
                            <TableCell>{props.usuario.clave}</TableCell>
                            <TableCell>{props.usuario.tipo}</TableCell> */}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>    
    
        </div> );
}
 
export default UsuariosAd;