import React from 'react';

//material ui
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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
    
    return ( 
    
    <div className={styles.modal}>
        
        <form >

            <div >

                <div >

                    <h2>login</h2>

                </div>
                <div>

                    <TextField
                        className={styles.inpus} 
                        id="filled-basic"
                        label="correo electronico"
                        variant="filled"                
                    />
                    <br/>
                    <TextField
                        className={styles.inpus}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <br/>
                    <div className={styles.divbotones}>
                        <Button variant="contained" color="primary" onClick={()=>{props.openClos()}}>
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