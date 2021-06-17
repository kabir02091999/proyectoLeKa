import React from 'react';

//materia ui
import {makeStyles,Drawer,IconButton,Divider} from '@material-ui/core'
import{
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
}from '@material-ui/core'

//iconos
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//rputer
import { useHistory } from "react-router-dom";

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
    const historia=useHistory()

    return ( 
    
    <Drawer
        className={classes.drawer}
        variant="persistent"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
       

        <div className={classes.offset} >

            <IconButton aria-label="canselar" /* className={} */ onClick={()=>{props.openClosMenu(); props.setopen(false); console.log(props.open)}} > <ArrowForwardIcon/> </IconButton>

        </div>
        <Divider/>

        <div className={classes.drawerContainer}>

            <List component="nav" >

                <ListItem button onClick={()=>{
                    props.openClosMenu();
                    props.openClos();
                }}>

                    <ListItemIcon>

                        <AccountCircleIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        login

                    </ListItemText>

                </ListItem>
                <ListItem button onClick={()=>{
                    props.openCloseRegistro();
                    props.openClosMenu();
                }}>

                    <ListItemIcon>

                        <PersonAddIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        registro

                    </ListItemText>

                </ListItem>
                <ListItem button onClick={()=>{
                    historia.push("/");
                    props.openClosMenu();}}>

                    <ListItemIcon>

                        <HomeIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        inicio

                    </ListItemText>

                </ListItem>

            </List>

        </div>

    </Drawer> );

    
}
 
export default CajonInicio;