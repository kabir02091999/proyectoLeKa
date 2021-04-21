import React from 'react';

//material ui
import {makeStyles,Drawer} from '@material-ui/core'
import ListAdministrador from './ListAdministrador';

import '../../css/stilosNav.css'

//funcion
const estylos = makeStyles((theme)=>({
    
    offset:theme.mixins.toolbar,
    drawer: {
        width: 250,
        flexShrink: 0,
    },drawerPaper: {
        width: 250,
    },drawerContainer: {
        overflow: 'auto',
    },

}))

const CajonAdministrador = (prosp) => {
    
    const clases = estylos()
    
    return ( 
        <Drawer 
        className={clases.drawer}
        variant="permanent"
        classes={{
          paper: clases.drawerPaper,
        }} >
            <div className={clases.offset}></div>
            
        <div className={clases.drawerContainer}>

            <ListAdministrador setVistapre={prosp.setVistapre} />

        </div>

    </Drawer> );
}
 
export default CajonAdministrador;