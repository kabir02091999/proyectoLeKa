import React,{useState} from 'react';

//materia UI
import {makeStyles} from '@material-ui/core/styles'
import {TextField, Checkbox} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

//formulario
import { useForm, Controller } from "react-hook-form";


import InputLabel from '@material-ui/core/InputLabel';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';



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

const Registro = (props) => {

    const [varial, setvarial] = useState(10)
    const styles=useStyles()
    const { handleSubmit} = useForm();
    const [cambioErrores, setcambioErrores] = useState({

        name:null,
        apellido:null,
        usuario:null,
        gmail:null,
        password:null,

    })
    const [newUsuario, setnewUsuario] = useState({

        name:"",
        apellido:"",
        usuario:"",
        gmail:"",
        genero:"",
        password:"",

    })
    
    const onChange = (ev)=>{
        
        console.log(ev.target.value)
        setnewUsuario(
            {...newUsuario , 
            [ev.target.name] : ev.target.value})
 
    }

    const enviar= (ev) =>{

        ev.preventDefault();
        console.log(newUsuario)

    }

    const cambio = (a) =>{

        setvarial(a.target.value)

    }
    return ( 
    <div className={styles.modal}>

         <form  onSubmit={enviar} >

            <div>

                <div>
                    <h2>registro</h2>
                </div>
                <div>
                    <TextField
                        error={cambioErrores.name}
                        className={styles.inpus} 
                        id="filledbasic-1"
                        name="name"
                        label={cambioErrores.name? "error" : "name"}
                        variant="filled"
                        onChange={onChange}                
                    />
                    <br/>
                    <TextField
                        error={cambioErrores.apellido}
                        className={styles.inpus} 
                        id="filledbasic-2"
                        name="apellido"
                        label={cambioErrores.apellido? "error" : "apellido"}
                        variant="filled"
                        onChange={onChange}                
                    />
                    <br/>
                    <TextField
                        error={cambioErrores.usuario}
                        className={styles.inpus} 
                        id="filled-basic-3"
                        name="usuario"
                        label={cambioErrores.apellido? "error" : "usuario"}
                        variant="filled" 
                        onChange={onChange}               
                    />
                    <TextField
                        error={cambioErrores.gmail}
                        className={styles.inpus} 
                        id="filled-basic-4"
                        name="gmail"
                        label={cambioErrores.apellido? "error" : "gmail"}
                        variant="filled"
                        onChange={onChange}                
                    />
                    <br/>
                    <FormControl >
                        <InputLabel id="demo-simple-select-label"  >genero</InputLabel>
                        <Select /* ojo hau qye esat */
                            name="genero" 
                            onChange={onChange}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={cambio}
                            value={varial}
                        >
                        <MenuItem value={10}>masculino</MenuItem>
                        <MenuItem value={20}>femenina</MenuItem>
                        <MenuItem value={30}>no se </MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <TextField
                        error={cambioErrores.password}
                        className={styles.inpus}
                        id="filled-password-input-5"
                        name="password"
                        label={cambioErrores.apellido? "error" : "password"}
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={onChange}
                    />
                    <br/> 

                    <div className={styles.divbotones}>
                        <Button variant="contained" color="primary" type="submit" type="submit">
                            accetar
                        </Button>
                        <Button  variant="contained" color="secondary" onClick={()=>{props.openCloseRegistro()}} >
                            cancelar
                        </Button>
                    </div>

                </div>

            </div>

        </form> 



    </div> );
}
 
export default Registro;