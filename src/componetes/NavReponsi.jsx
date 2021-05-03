import React,{useState} from 'react';

//materia ui
import {makeStyles,Drawer} from '@material-ui/core'

const stylos = makeStyles(theme => ({

    offset:theme.mixins.toolbar,
    drawer: {
        width: 250,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 250,
    }

}))

const NavReponsi = () => {
    
    const clas = stylos()
    const [openNav, setopenNav] = useState(false)
    
    return ( 
    <Drawer
    className={clas.drawer}
    variant="permanent"
    classes={{
        paper: clas.drawerPaper,
    }}
    anchor="right" 
    open={openNav}
    >

        <div className={clas.offset} />

        <div>

            <h1>hola</h1>

        </div>

    </Drawer> );
}
 
export default NavReponsi;