import React from 'react';

//material ui
import Typography from '@material-ui/core/Typography'
import {TableContainer,
        Table,
        TableHead,
        TableRow,
        TableCell,
        TableBody} from '@material-ui/core'


const InicioAd = (props) => {
    return ( 
        <div>

            <Typography variant="h3" color="initial">bienvenido {props.usuario.nombre}  {props.usuario.apellido}</Typography>
            <Typography variant="h6" color="initial">datos personales</Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
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
                            <TableCell>{props.usuario.nombre}</TableCell>
                            <TableCell>{props.usuario.apellido}</TableCell>
                            <TableCell>{props.usuario.usuario}</TableCell>
                            <TableCell>{props.usuario.mail}</TableCell>
                            <TableCell>{props.usuario.genero}</TableCell>
                            <TableCell>{props.usuario.clave}</TableCell>
                            <TableCell>{props.usuario.tipo}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div> );
}
 
export default InicioAd;