import React,{useState} from 'react';

//materia UI
import {makeStyles} from '@material-ui/core/styles'
import {TextField, Checkbox} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

//formulario
import { useForm, Controller } from "react-hook-form";


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


    const styles=useStyles()
    const { handleSubmit} = useForm();
    const [newUsuario, setnewUsuario] = useState({

        nombre:"",
        apellido:"",
        gmail:"",
        usename:"",
        password:"",

    })
    
    const onSubmit = () => {
        const nombre = document.getElementById("filled-basic1").value
        const apellido = document.getElementById("filled-basic2").value
        const gmail = document.getElementById("filled-basic3").value
        const username = document.getElementById("filled-basic4").value
        const password = document.getElementById("filled-password-input4").value
        /* const genero = document.getElementById("filled-basic6").value */
        setnewUsuario(

            newUsuario.nombre=nombre,
            newUsuario.apellido=apellido,
            newUsuario.gmail=gmail,
            newUsuario.usename=username,
            newUsuario.password=password,
            
        )
        console.log(newUsuario)
    };

    return ( 
    <div className={styles.modal}>

         <form onSubmit={handleSubmit(onSubmit)}>

            <div>

                <div>
                    <h2>registro</h2>
                </div>
                <div>

                     <TextField
                        className={styles.inpus} 
                        id="filled-basic1"
                        name="name"
                        label="name"
                        variant="filled"                
                    />
                    <br/>
                    <TextField
                        className={styles.inpus} 
                        id="filled-basic2"
                        name="last name"
                        label="last name"
                        variant="filled"                
                    />
                    <TextField
                        className={styles.inpus} 
                        id="filled-basic3"
                        name="email"
                        label="email"
                        variant="filled"                
                    />
                    <br/>
                    <TextField
                        className={styles.inpus} 
                        id="filled-basic4"
                        name="username"
                        label="Username"
                        variant="filled"                
                    />
                    <br/>
                    <TextField
                        className={styles.inpus}
                        id="filled-password-input4"
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <br/> 

                    <div className={styles.divbotones}>
                        <Button variant="contained" color="primary" type="submit">
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