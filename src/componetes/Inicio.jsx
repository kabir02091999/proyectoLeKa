import React from 'react';
import '../css/stilosInicio.css'

//iconos
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

//iconos de pie pagina
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';

//imagenes
import Captura from'../imagenes/Captura.jpg'

const Inicio = () => {
    return ( <div className="main">

        <div className="imagenesEventos">

            <img src={Captura} alt="imagen" className="imagen" />

        </div>
        <div className="productos" >

            <h1>productos</h1>

        </div>
        <div className="catergoria">

            <h1>categorias</h1>

        </div>
        <div className="pie_de_pagina">

            <h1>pie de pagina</h1>

        </div>


    </div> );
}
 
export default Inicio;