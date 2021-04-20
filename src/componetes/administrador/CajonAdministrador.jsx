import React from 'react';

//material ui
import {makeStyles,Drawer} from '@material-ui/core'
import ListAdministrador from './ListAdministrador';

import '../../css/stilosNav.css'

//funcion
const estylos = makeStyles((theme)=>({

    drawer: {
        width: 250,
        flexShrink: 0,
    },drawerPaper: {
        width: 250,
    },drawerContainer: {
        overflow: 'auto',
    },

}))

const CajonAdministrador = () => {
    
    const clases = estylos()
    
    return ( 
        <Drawer 
        className={clases.drawer}
        variant="permanent"
        classes={{
          paper: clases.drawerPaper,
        }} >
            <div className="cambiosaaa"></div>
            
        <div className={clases.drawerContainer}>

            <ListAdministrador/>

        </div>

    </Drawer> );
}
 
export default CajonAdministrador;