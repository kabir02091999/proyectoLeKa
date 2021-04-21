import React from 'react';

//material ui
import {makeStyles} from '@material-ui/core/styles'

//componentes
import NavAdminstradro from '../../componetes/administrador/NavAdminitrador';
import CajonAdministrador from '../../componetes/administrador/CajonAdministrador';

//css
import '../../css/stilosNav.css'

const estylos = makeStyles((theme)=>({

    root:{
        display:'flex'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    offset: theme.mixins.toolbar,
    divi:{
        width:'200px',
        height: '100%',
        display: 'inline-block',
    }

}))

const InicioAdministrador = (props) => {
    const classes= estylos()
    
    return (   
        <div className={classes.root}>
            
            <NavAdminstradro  setusuario={props.setusuario} /> 
            <CajonAdministrador/> 
            
            <div className={classes.content}>
                <div className="cambios"></div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse ullam deleniti, veritatis quis eligendi voluptatem molestiae placeat iusto laudantium ab cupiditate autem dolorum ipsum perspiciatis modi, cum eveniet distinctio!</h1>

            </div> 

        </div> 
        
    );
}
 
export default InicioAdministrador;