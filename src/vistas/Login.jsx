import React,{useState} from 'react';

//material ui
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment';
import {AccountCircle} from '@material-ui/icons';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Typography } from '@material-ui/core'

const useStyles=makeStyles((theme=>({

    modal:{
        position: 'absolute',
        width:400,
        backgroundColor:'white',
        /* border: '2px solid #000', */
        boxShadow: theme.shadows[5],
        padding:"16px 32px 24px",
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)', 
        borderRadius: '20px',
    },
    inpus:{

        width:'100%',
        marginTop: '10px'

    },divbotones:{

        display: 'flex',
        justifyContent: 'flex-end',

    }

})))


const Login = (props) => {
    
    const styles=useStyles()
    const [entrar, setentrar] = useState({
        correo:"",
        password:""
    })
    const [errores, seterrores] = useState({
        correo:false,
        password:false
    })
    const envioState = (ev) =>{
        console.log(ev.target.value)
        setentrar({...entrar,[ev.target.name] : ev.target.value})
    }

    const enviobase = (ev) =>{
        const cues = {
            correo:false,
            password:false
        }
        ev.preventDefault();
        if(entrar.correo===""||entrar.correo.indexOf("@")===-1||entrar.correo.indexOf(".com")===-1){
            cues.correo=true
        }else if(entrar.password===""){
            cues.password=true
        }else {
            console.log("correto")
            props.openClos()
        }
        seterrores(cues)
    }

    return ( 
    
    <div className={styles.modal}>
        
        <form onSubmit={enviobase} >

            <div >

                <div >

                    <Typography variant="h4" color="initial">login</Typography>

                </div>
                <div>
                    <TextField
                        className={styles.inpus} 
                        error={errores.correo}
                        id="filled-basic"
                        onChange={envioState}
                        name="correo"
                        label={ errores.correo ? "error" : "correo electronico"}
                        variant="filled" 
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle color="primary" />
                            </InputAdornment>
                        ),
                        }}               
                    />
                    <br/>
                    <TextField
                        className={styles.inpus}
                        error={errores.password}
                        id="filled-password-input"
                        onChange={envioState}
                        name="password"
                        label={errores.password? "error":"Password"}
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon color="primary" />
                            </InputAdornment>
                        ),
                        }} 
                    />
                    <br/>
                    <div className={styles.divbotones}>
                        <Button variant="contained" color="primary" type="submit" >{/* ojo aqui cuando valla a validar */}
                        accetar
                        </Button>
                        <Button  variant="contained" color="secondary" onClick={()=>{props.openClos()}}>
                        cancelar
                        </Button>
                    </div>
                </div>

            </div>

        </form>

    </div> );
}
 
export default Login;