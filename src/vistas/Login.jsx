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
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding:"16px 32px 24px",
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)', 

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
                      id="filled-basic"
                      label="correo electronico"
                      variant="filled"                
                    />
                    <br/>
                    <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    />
                    <br/>
                    <Button  variant="contained" color="primary" onClick={()=>{props.OpenClos(props.modal)}}>
                      accetar
                    </Button>
                    <Button  variant="contained" color="secondary" onClick={()=>{props.OpenClos(props.modal)}}>
                      cancelar
                    </Button>
                </div>

            </div>

        </form>

    </div> );
}
 
export default Login;