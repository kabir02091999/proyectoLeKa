import React,{useState} from 'react';

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
    const [Vistapre, setVistapre] = useState({

        inicio:true,
        usuario:false,
        Nproducto:false,
        Eproducto:false,
        Edproducto:false

    })
    
    return (   
        <div className={classes.root}>
            
            <NavAdminstradro  setusuario={props.setusuario} /> 
            <CajonAdministrador setVistapre={setVistapre} /> 
            
            <div className={classes.content}>
                <div className="cambios"></div>
                
                {Vistapre.inicio && <h1>inicio</h1>  }
                {Vistapre.usuario && <h1>usuarios</h1> }
                {Vistapre.Nproducto && <h1>productos</h1> }
                {Vistapre.Eproducto && <h1>eliminar productos</h1> }
                {Vistapre.Edproducto && <h1>editar productos</h1> }

            </div> 

        </div> 
        
    );
}
 
export default InicioAdministrador;