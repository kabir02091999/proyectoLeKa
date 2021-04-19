import React,{useState,useEffect} from 'react';

//material ui
import {makeStyles, Modal, TextField, Typography, IconButton} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button'

//iconos
import CloseIcon from '@material-ui/icons/Close';

const useStyle=makeStyles((theme=>({

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
        paddingTop:"0px"

    },inpus:{

        width:'100%',
        marginTop: '10px'

    },divbotones:{

        display: 'flex',
        justifyContent: 'flex-end',

    },divp:{

        marginTop:'10px',
        marginBottom:'5px'

    },icoClos:{

        /* ojo */

    }

})))


const ComCoerreo = (props) => {
    
    const styles = useStyle();
    const [codigoCorreo, setcodigoCorreo] = useState("")

    const envioState = (ev)=>{
        setcodigoCorreo(ev.target.value) 
    }

    const enviobase = (ev)=>{
        ev.preventDefault();
        console.log(codigoCorreo)

    }

    return ( 

        <div>
           
            <div className={styles.modal}>
                <div className={styles.divbotones}>
                    <IconButton aria-label="canselar" className={styles.icoClos} onClick={()=>{props.openclosecorreo()}} >
                        <CloseIcon/>
                    </IconButton>
                </div>
                <Typography variant="h4" color="initial">verificacion de correo</Typography>
                <p className={styles.divp}>a su correo se envio un codigo para para crear la cuenta</p>

                <form onSubmit={enviobase} >

                    <TextField
                        onChange={envioState}
                        className={styles.inpus} 
                        id="filledbasic-1"
                        name="name"
                        label="ingrese codigo"
                        variant="filled"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon color="primary"/>
                            </InputAdornment>
                        ),
                        }} 
                    />
                    
                    <div className={styles.divbotones}>
                        <Button variant="contained" color="primary" type="submit">
                            accetar
                        </Button>
                    </div>

                </form>

            </div>

        </div>

     );
}
 
export default ComCoerreo;