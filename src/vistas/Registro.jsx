import React,{useState} from 'react';

//materia UI
import {makeStyles} from '@material-ui/core/styles'
import {TextField, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';

//materia ui
import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation signUp($input : InputSignUp!) {
    signUp(input: $input) {
        message
        code
        user{
          id
          email
        }
      }
  }
`;

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

    },inpusName:{

        width:'45%',
        display: "inline-block",
        marginTop: '10px',
         marginRight: '10px' 

    },divName:{

        textAlign: "center",
        padding: "auto",
        paddingLeft: "10px"

    }
    
    ,divbotones:{

        display: 'flex',
        justifyContent: 'flex-end',
        marginTop:'10px'

    },selecto:{

        width:"50%",
        marginLeft:"27%"

    }

})))

const Registro =  (props) => {
    
    const [signUp, { loading, error, data }] =  useMutation(CREATE_USER);
    const [varial, setvarial] = useState(5)
    const styles=useStyles()
    const [clonpassword, setclonpassword] = useState("")
    const [cambioErrores, setcambioErrores] = useState({
        name:false,
        apellido:false,
        usuario:false,
        gmail:false,
        genero:false,
        password:false,
        MessajeName:"",
        MessajeApellido:"",
        MessajeUsuario:"",
        MessajeGmail:"",
        MessajeGenero:"",
        MessajePassword:"",
        MessajePassword1:"",
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

    const clonclave = (ev) =>{
        setclonpassword(ev.target.value)
    }

    const enviar= async (ev) =>{
        const v = {
            name:false,
            apellido:false,
            usuario:false,
            genero:false,
            gmail:false,
            password:false,
            password1:false,
            MessajeName:"",
            MessajeApellido:"",
            MessajeUsuario:"",
            MessajeGmail:"",
            MessajeGenero:"",
            MessajePassword:"",
            MessajePassword1:"",
            }
        ev.preventDefault();
        if(newUsuario.name==="" || newUsuario.apellido==="" || newUsuario.usuario==="" || newUsuario.gmail==="" || newUsuario.genero==="" || newUsuario.password==="" || clonpassword === ""){
            if(newUsuario.name==="" ){
                v.name=true
                v.MessajeName="Esta haria se requiere"
            }if(newUsuario.apellido==="" ){
                v.apellido=true
                v.MessajeApellido="Esta haria se requiere"
            }if(newUsuario.usuario==="" ){
                v.usuario=true
                v.MessajeUsuario="Esta haria se requiere"
            }if(newUsuario.gmail==="" ){
                v.gmail=true
                v.MessajeGmail="Esta haria se requiere"
            }if(newUsuario.genero==="" ){
                v.genero=true
                v.MessajeGenero="Esta haria se requiere"
            }if(newUsuario.password==="" ){
                v.password=true
                v.MessajePassword="Esta haria se requiere"
            }if(clonpassword === ""){
                setclonpassword(true)
                v.MessajePassword1="Esta haria se requiere"
            }    
            setcambioErrores(v)
        }else{
            const a=newUsuario.name
            console.log(newUsuario.gmail.indexOf("@"))
            console.log(newUsuario)
            if(newUsuario.gmail.indexOf("@")===-1||newUsuario.gmail.indexOf(".com")===-1){
                v.gmail=true
                if(newUsuario.gmail.indexOf("@")===-1){
                    v.MessajeGmail="hace faltal @"
                }else{
                    v.MessajeGmail="hace falta .com"
                }
            }if(newUsuario.password!=clonpassword){
                v.password1=true
                v.MessajePassword1="la clace no son iguales"
            }else{
                console.log(newUsuario);
                
                /* aprnder */
                await signUp({variables: {
                    input: newUsuario
                }})
                console.log(error)
                props.openclosecorreo()
                props.openCloseRegistro()
                
            }
             
            setcambioErrores(v)
        }
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
        
    }

    return ( 
    <div className={styles.modal}>
        <form  onSubmit={enviar} >
            <div>
                <div>
                    <Typography variant="h4" color="initial">registro</Typography>
                </div>
                <div>
                    <div className={styles.divName}>
                        <TextField
                            error={cambioErrores.name}
                            className={styles.inpusName} 
                            id="filledbasic-1"
                            name="name"
                            label={cambioErrores.name ? cambioErrores.MessajeName : "name"}
                            variant="filled"
                            onChange={onChange}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon color="primary"/>
                                </InputAdornment>
                            ),
                            }}                
                        />
                        <TextField
                            error={cambioErrores.apellido}
                            className={styles.inpusName} 
                            id="filledbasic-2"
                            name="apellido"
                            label={cambioErrores.apellido? cambioErrores.MessajeApellido : "apellido"}
                            variant="filled"
                            onChange={onChange}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon color="primary"/>
                                </InputAdornment>
                            ),
                            }}                     
                        />
                    </div>
                    
                    <FormControl className={styles.selecto} >
                        <InputLabel id="demo-simple-select-label" error={cambioErrores.genero} >{cambioErrores.genero? cambioErrores.MessajeGenero :"genero"}</InputLabel>
                        <Select /* ojo hau qye esat */
                            onChange={cambio}
                            labelId="demo-simple-select-label"
                            inputProps={{
                                name: 'genero',
                                id: 'age-native-simple',
                            }}
                            value={varial}
                        >
                        <MenuItem value={5}>{cambioErrores.genero? cambioErrores.MessajeGenero:"genero"}</MenuItem>
                        <MenuItem value={10}>masculino</MenuItem>
                        <MenuItem value={20}>femenina</MenuItem>
                        <MenuItem value={30}>no se </MenuItem>
                        </Select>
                    </FormControl>
                    
                    <TextField
                        error={cambioErrores.usuario}
                        className={styles.inpus} 
                        id="filled-basic-3"
                        name="usuario"
                        label={cambioErrores.usuario? cambioErrores.MessajeUsuario : "usuario"}
                        variant="filled" 
                        onChange={onChange}InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon color="primary"/>
                            </InputAdornment>
                        ),
                        }}               
                    />
                    <TextField
                        error={cambioErrores.gmail}
                        className={styles.inpus} 
                        id="filled-basic-4"
                        name="gmail"
                        label={cambioErrores.gmail? cambioErrores.MessajeGmail : "gmail"}
                        variant="filled"
                        onChange={onChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon color="primary"/>
                            </InputAdornment>
                        ),
                        }}                
                    />
                    
                    <br/>
                    <TextField
                        error={cambioErrores.password}
                        className={styles.inpus}
                        id="filled-password-input-5"
                        name="password"
                        label={cambioErrores.password? cambioErrores.MessajePassword : "password"}
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={onChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon color="primary"/>
                            </InputAdornment>
                        ),
                        }} 
                    />
                    <TextField
                        error={cambioErrores.password1}
                        className={styles.inpus}
                        id="filled-password-input-6"
                        name="password"
                        label={cambioErrores.password1? cambioErrores.MessajePassword1 : "Confirmpassword"}
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={clonclave}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon color="primary"/>
                            </InputAdornment>
                        ),
                        }} 
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