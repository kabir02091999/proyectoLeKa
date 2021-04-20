import React from 'react';
import ListAdministrador from '../../componetes/administrador/ListAdministrador';

//material ui
import {makeStyles} from '@material-ui/core/styles'

//componente
import NavAdminstradro from '../../componetes/administrador/NavAdminitrador';




const InicioAdministrador = (props) => {
    return ( <div>

        <NavAdminstradro setusuario={props.setusuario} />
        <ListAdministrador/>

    </div> );
}
 
export default InicioAdministrador;