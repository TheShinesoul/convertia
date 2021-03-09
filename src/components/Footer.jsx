import React from 'react'
import logo from '../assets/img/megacable@2x.png'
import '../assets/styles/footer.scss'

const Footer = () => {
    return(
        <footer>
            <div className="footer-logo ">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-7">
                        <img src={logo}></img>
                    </div>
                    <div className="col-sm-5">
                        <ul>
                            <li>
                                <a href="#">Términos y Condiciones</a>
                            </li>
                            <li>
                                <a href="#">Aviso de Privacidad</a>
                            </li>
                            <li>
                                <a href="#">Política y Seguridad</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="footer-info">
                <div className="row">
                    <div className="col-sm-5 footer-info__text">
                        <p>
                            Para contratar déjanos tu número
                        </p>
                        <p><span>y te marcaremos en segundos.</span></p>
                    </div>
                    <div className="col-sm-3">
                        <div className="footer-info__phone">
                            <div>55 1234 5678</div>
                        </div>
                    </div>
                    <div className="col-sm-2 footer-info__checbox">
                        <input type="checkbox"/><label>He leído y acepto los <a href="#">Términos y Condiciones</a></label>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn-orange-white">
                            Solicitar
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer