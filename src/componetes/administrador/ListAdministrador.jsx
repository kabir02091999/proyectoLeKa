import React from 'react';

//materia ui 
import{
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
}from '@material-ui/core'

//icon
import GroupIcon from '@material-ui/icons/Group';
import QueueIcon from '@material-ui/icons/Queue';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';

const ListAdministrador = (props) => {
    
    const inicio=() =>{

        const clase = {

            inicio:true,
            usuario:false,
            Nproducto:false,
            Eproducto:false,
            Edproducto:false

        }
        props.setVistapre(clase)

    }

    const usuarios = ()=>{

        const clase = {

            inicio:false,
            usuario:true,
            Nproducto:false,
            Eproducto:false,
            Edproducto:false

        }
        props.setVistapre(clase)

    }

    const productos = ()=>{

        const clase = {

            inicio:false,
            usuario:false,
            Nproducto:true,
            Eproducto:false,
            Edproducto:false

        }
        props.setVistapre(clase)

    }

    const EliminarProductos = ()=>{

        const clase = {

            inicio:false,
            usuario:false,
            Nproducto:false,
            Eproducto:true,
            Edproducto:false

        }
        props.setVistapre(clase)

    }

    const EditarProductos = ()=>{

        const clase = {

            inicio:false,
            usuario:false,
            Nproducto:false,
            Eproducto:false,
            Edproducto:true

        }
        props.setVistapre(clase)

    }
    
    
    return ( 

        <div>

            <List component="nav" >

                <ListItem button onClick={()=>{inicio()}}> 

                    <ListItemIcon>

                        <HomeIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        inicio

                    </ListItemText>

                </ListItem>

                <ListItem button onClick={()=>{usuarios()}}> 

                    <ListItemIcon>

                        <GroupIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        usuarios

                    </ListItemText>

                </ListItem>

                <ListItem button button onClick={()=>{productos()}}>

                    <ListItemIcon>

                        <QueueIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        nuevo producto

                    </ListItemText>

                </ListItem>
                <ListItem button onClick={()=>{EliminarProductos()}}>

                    <ListItemIcon>

                        <IndeterminateCheckBoxIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        eliminar producto

                    </ListItemText>

                </ListItem>
                <ListItem button onClick={()=>{EditarProductos()}}>

                    <ListItemIcon>

                        <EditIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        editar producto

                    </ListItemText>

                </ListItem>

            </List>

        </div>

     );
}
 
export default ListAdministrador;