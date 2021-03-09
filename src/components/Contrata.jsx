import React from 'react'
import contrata from '../assets/img/contrata.png'
import '../assets/styles/contrata.scss'
import lap from '../assets/img/lap.png'
import lap2 from '../assets/img/lap-teclado.png'
import megas1 from '../assets/img/icons/Imagen 1.png'
import megas2 from '../assets/img/icons/Imagen 2.png'
import megas3 from '../assets/img/icons/Imagen 3.png'
import megas4 from '../assets/img/icons/Imagen 4.png'
import Footer from '../components/Footer'

import Paquete from './Paquete'

const Contrata = () => {
    return(
        <div className="contrata-content">
            <div className="contrata-publicidad"
                style={{ background: `url(${contrata})` }}>               
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 contrata-text">                        
                        <p className="contrata-text__internet">Internet <span>INIGUALABLE</span></p>
                        <p>TV Interactiva + Telefonía Fija</p>

                        <span className="contrata-text__precio">Desde <span>$449</span> al mes</span>
                        <button className="btn-blue">LO QUIERO</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 contrata">
                        <div className="contrata-card">
                            <div className="contrata-card__tittle">
                                <p>¡Contrata ahora!</p>
                            </div>
                            <div className="contrata-card__body">
                                <p className="text-title">Déjanos tu número y te llamamos en segundos</p>
                                <p className="text-subtitle">Si es celular sin el 044 o 045.</p>
                                <div className="contrata-card__form">
                                    <input type="number" placeholder="Tu teléfono" className="input-phone"/>
                                    <div className="input-form-checkbox">
                                        <input type="checkbox" /><label className="input-checkbox">He leído y acepto las políticas de privacidad.</label>
                                    </div>
                                    
                                    <button className="btn-callme">LLÁMAME</button>
                                </div>
                            </div>
                        </div>
                    </div>                        
                </div>                
            </div>
            <div className="section-paquetes"
                style={{ background: `url(${lap})` }}>
                <button>TRIPLE PACK</button>
                <button>DOBLE PACK</button>
            </div>
            <div className="container-card__paquete">
                <Paquete imagen={megas1} titulo={'+ 80 Canales + 50 Canales HD'}/>
                <Paquete imagen={megas2} titulo={'+ 120 Canales + 90 Canales HD'}/>
                <Paquete imagen={megas3} titulo={'+ 120 Canales + 90 Canales HD'}/>
                <Paquete imagen={megas4} titulo={'+ 120 Canales + 90 Canales HD'}/>
                <Paquete imagen={megas4} titulo={'+ 120 Canales + 90 Canales HD'} opcional={'XVIEW TOTAL 200'}/>
                <Paquete imagen={megas4} titulo={'+ 120 Canales + 90 Canales HD'} opcional={'XVIEW TOTAL 200'}/>
            </div>
            <div className="section-paquetes"
                style={{ background: `url(${lap2})` }}>
                <button>TRIPLE PACK</button>
                <button>DOBLE PACK</button>
            </div>

            <div className="container-card__paquete">
                <Paquete titulo={'Hasta 50 Mbps de velocidad + Llamadas Ilimitadas'}/>
                <Paquete titulo={'Hasta 100 Mbps de velocidad + Llamadas Ilimitadas'}/>
                <Paquete titulo={'Hasta 200 Mbps de velocidad + Llamadas Ilimitadas'}/>
                <Paquete titulo={'Hasta 350 Mbps de velocidad + Llamadas Ilimitadas'}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Contrata