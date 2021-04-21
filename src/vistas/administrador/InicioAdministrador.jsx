import React,{useState} from 'react';

//material ui
import {makeStyles} from '@material-ui/core/styles'

//componentes
import NavAdminstradro from '../../componetes/administrador/NavAdminitrador';
import CajonAdministrador from '../../componetes/administrador/CajonAdministrador';
import InicioAd from '../../componetes/administrador/VisComAdministrador/InicioAd';
import UsuariosAd from '../../componetes/administrador/VisComAdministrador/UsuariosAd';
import Nproductos from '../../componetes/administrador/VisComAdministrador/NproductosAd';
import EliProductos from '../../componetes/administrador/VisComAdministrador/EliProductos';
import EdiProductos from '../../componetes/administrador/VisComAdministrador/EdiProductos';

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
                <div className={classes.offset}></div>
                
                {Vistapre.inicio && <InicioAd/> }
                {Vistapre.usuario && <UsuariosAd/> }
                {Vistapre.Nproducto && <Nproductos/> }
                {Vistapre.Eproducto && <EliProductos/> }
                {Vistapre.Edproducto && <EdiProductos/> }

            </div> 

        </div> 
        
    );
}
 
export default InicioAdministrador;