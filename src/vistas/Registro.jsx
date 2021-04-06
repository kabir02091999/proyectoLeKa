import React,{useState} from 'react';

//materia UI
import {makeStyles} from '@material-ui/core/styles'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
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
        marginTop:'10px'

    },selecto:{


        

    }

})))

const Registro = (props) => {
    const [varial, setvarial] = useState(5)
    const styles=useStyles()
    
    const [cambioErrores, setcambioErrores] = useState({

        name:null,
        apellido:null,
        usuario:null,
        gmail:null,
        genero:null,
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
        
        setnewUsuario(
            {...newUsuario , 
            [ev.target.name] : ev.target.value})
 
    }

    const enviar= (ev) =>{
        ev.preventDefault();
        if(newUsuario.name==="" || newUsuario.apellido==="" || newUsuario.usuario==="" || newUsuario.gmail==="" || newUsuario.genero==="" || newUsuario.password===""){

            console.log("error")

        }else{

            console.log("todos los datos estan llenos")

        }
        console.log(newUsuario)
    }

    const cambio = (a) =>{

        setvarial(a.target.value)
        
        if(a.target.value===10){

            newUsuario.genero="masculino"

        }else if(a.target.value===20){

            newUsuario.genero="femenina"

        }else if(a.target.value===30){

            newUsuario.genero="no sabe"

        }
        
        console.log(newUsuario.genero)

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
                        <InputLabel id="demo-simple-select-label" error={cambioErrores.genero} >{cambioErrores.genero? "error":"genero"}</InputLabel>
                        <Select /* ojo hau qye esat */
                            onChange={cambio}
                            labelId="demo-simple-select-label"
                            inputProps={{
                                name: 'genero',
                                id: 'age-native-simple',
                            }}
                            value={varial}
                        >
                        <MenuItem value={5}>{cambioErrores.genero? "error":"genero"}</MenuItem>
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