import React,{useState} from 'react';

//materia ui
import {makeStyles,Drawer,IconButton,Divider} from '@material-ui/core'

//iconos
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const stylos = makeStyles(theme => ({

    offset:theme.mixins.toolbar,
    drawer: {
        width: 250,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 250,
    },
    drawerContainer: {
        overflow: 'auto',
    },

}))

const CajonInicio = (props) => {
    const classes = stylos()
    const [openNav, setopenNav] = useState(false) 

    return ( 
    
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >

        <div className={classes.offset} >

            <IconButton aria-label="canselar" /* className={} */ onClick={()=>{props.openClosMenu();}} > <ArrowForwardIcon/> </IconButton>

        </div>
        <Divider/>

        <div className={classes.drawerContainer}>

            <h1>hola</h1>

        </div>

    </Drawer> );

    
}
 
export default CajonInicio;