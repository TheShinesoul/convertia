import React, {useState} from 'react'
import wifi from '../assets/img/icons/wifi.svg'
import ui from '../assets/img/icons/ui.svg'
import '../assets/styles/paquete.scss'

const Paquete = ({imagen,titulo,opcional}) => {
    const [ infoShow, setinfoShow ] = React.useState(false)
    const [ infoption, setInfoption ] = React.useState('+')

    const showInfo = () =>{
        if(infoption === '-'){
            setInfoption('+')
        }else{
            setInfoption('-')
        }
        if(infoShow ){
            setinfoShow(false)
        }else{
            setinfoShow(true)
        }
    }
    return(
        <div className="card-paquete">
            <div className="card-paquete__icon">
                <div className="icons">
                    {opcional && <div className="text">{opcional}</div>}
                    {imagen && <img src={imagen}/>}
                    <div className="text">{titulo}</div>
                </div>
                <button>LO QUIERO</button>
            </div>
            {
                infoShow && <div className="more-info d-block1" >
                <p>TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a celular</p>
                    <div className="more-info-icons">
                        <div className="plan-info">
                            <img src={wifi}/>
                            <div className="text">Conexión a Internet</div>
                        </div>
                        <div className="plan-info">
                            <img src={ui}/>
                            <div className="text-description">
                                Conexión a Internet
                                <p>Nacionales | A EUA y Canadá | A móviles</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
                       <button className="more_btn" onClick={showInfo}>{infoption}</button>
        </div>
    )
}

export default Paquete