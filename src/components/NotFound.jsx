import React from 'react'
import notFound from '../assets/img/404.png'
import '../assets/styles/notfound.scss'
import credito from '../assets/img/icons/dinero.svg'
import celular from '../assets/img/icons/ui.svg'
import mensajes from '../assets/img/icons/charla.svg'
import wifi from '../assets/img/icons/wifi.svg'
import tv from '../assets/img/icons/monitor.svg'
import phone from '../assets/img/icons/phone-call.svg'
import correo from '../assets/img/icons/correo.svg'
import Footer from './Footer'

const NotFound = () => {
    return(
        <div className="notFound">
            <div 
                className="notFound-image"
                style={{ background: `url(${notFound})` }}
            >   
                <div className="notFound-content">
                    <p>Chin,</p>
                    <p>¿algo no va bien?</p>
                    <button>Te ayudamos</button>
                </div>
            </div>
            <div className="notFound-info">
                <div className="notFound-info__text">
                    <p>
                    Sabemos que la tecnología no siempre está de nuestro lado y los <span>inconvenientes suceden</span>. Por ello, <span>ponemos a tu disposición nuestros canales de Servicio al Cliente para ayudarte</span> a resolver aquellos fallos o dudas que tengas sobre:
                    </p>
                </div>
                <div className="notFound-info__icons">
                    <div className="icons">
                        <img src={credito}></img>
                        <p>Consulta de saldo</p>
                    </div>
                    <div className="icons">
                        <img src={celular}></img>
                        <p>Soporte Técnico Telefonía</p>
                    </div>
                    <div className="icons">
                        <img src={mensajes}></img>
                        <p>Quejas y sugerencias</p>
                    </div>
                    <div className="icons">
                        <img src={wifi}></img>
                        <p>Soporte Técnico Internet</p>
                    </div>
                    <div className="icons">
                        <img src={tv}></img>
                        <p>Soporte Técnico Televisión</p>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="contact_info">
                    <img className="icon" src={correo}/>
                    <span>atencionclientes@xxxx.com.mx</span>
                </div>
                <div className="contact_info">
                    <img className="icon" src={phone}/>
                    <span>673 690 0100</span>
                </div>
            </div>
            <div className="help">
                <p>Aumenta tu velocidad de internet o cambia tu <span>Doble plack por un Triple pack</span> a un precio inigualable.</p>
                <button className="home-button-orange">Te ayudamos</button>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound