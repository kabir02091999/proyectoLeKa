import React from 'react';


//componente
import NavAdminstradro from '../../componetes/administrador/NavAdminitrador';


const InicioAdministrador = (props) => {
    return ( <div>

        <NavAdminstradro setusuario={props.setusuario} />

    </div> );
}
 
export default InicioAdministrador;