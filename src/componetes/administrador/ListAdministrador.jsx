import React from 'react';

//materia ui 
import{
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
}from '@material-ui/core'

//icon
import GroupIcon from '@material-ui/icons/Group';
import QueueIcon from '@material-ui/icons/Queue';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import EditIcon from '@material-ui/icons/Edit';

const ListAdministrador = () => {
    return ( 

        <div>
            
            <List component="nav" >

                <ListItem button> 

                    <ListItemIcon>

                        <GroupIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        usuarios

                    </ListItemText>

                </ListItem>

                <ListItem button>

                    <ListItemIcon>

                        <QueueIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        nuevo producto

                    </ListItemText>

                </ListItem>
                <ListItem button>

                    <ListItemIcon>

                        <IndeterminateCheckBoxIcon/>

                    </ListItemIcon>
                    <ListItemText>

                        eliminar producto

                    </ListItemText>

                </ListItem>
                <ListItem button>

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