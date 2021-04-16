import React from 'react';
import '../css/stilosInicio.css'

//iconos de pie pagina
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';

//imagenes
import Captura from'../imagenes/Captura.jpg'
import computer from '../imagenes/computacion.jpg'
import telefonia from '../imagenes/telefonia.jpg'
import deporte from '../imagenes/deporte.jpg'
import videos from '../imagenes/videojuegos.jpg'
import apple from '../imagenes/apple.jpg'
import android from '../imagenes/android.jpg'

//materia ui
import Typography from '@material-ui/core/Typography'
import Categoria from './Categoria';

const Inicio = () => {
    return ( <div className="main">

        <div className="imagenesEventos">

            <img src={Captura} alt="imagen" className="imagen" />

        </div>
        <div className="productos" >

            <Typography variant="h5" color="initial">productos</Typography>
        
        </div>
        <div className="catergoria">
            
            <Typography variant="h5" className="tipografia_categoria">
                categorias
            </Typography>
            <Categoria nombre="computer" direccion={computer} direccio="/computacion" />
            <Categoria nombre="telefonia" direccion={telefonia} direccio="/telefonia" />
            <Categoria nombre="deporte" direccion={deporte} direccio="/deporte"  />
            <Categoria nombre="video juegos" direccion={videos} direccio="videos_juegos" />
            <Categoria nombre="apple" direccion={apple} direccio="/apple" />
            <Categoria nombre="Android" direccion={android} direccio="/android" />

            <div className="pie_de_pagina">

                <WhatsAppIcon className="pie_de_pagina_iconos"/>
                <InstagramIcon className="pie_de_pagina_iconos" />
                <TwitterIcon className="pie_de_pagina_iconos"/>
                <FacebookIcon className="pie_de_pagina_iconos"/>
                <TelegramIcon className="pie_de_pagina_iconos"/>

            </div>

        </div>
        


    </div> );
}
 
export default Inicio;