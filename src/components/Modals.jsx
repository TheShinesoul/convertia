import React from 'react'
import '../assets/styles/modal.scss'

const Modals = ( {title,setModal} ) => {
    const closeModal = () => {
        setModal(false)
    }
    
    return (
        <div className="modals">
        <p>{title}</p>
            <div className="contet-close-modal">
                <div className="close-modal" onClick={closeModal}>
                    <div className="icon-close">x</div>
                </div>
            </div>
            <div className="modal-content">
                <div className="text-tittle">
                    <h2>{title}</h2>
                </div>
                <div className="text-service">
                    <p>TV INTERACTIVA + TELEFONÍA FIJA A UN PRECIO <span className="text-blue">INCREÍBLE</span></p>
                </div>
                <input type="number" placeholder="Tu teléfono" className="input-telephone"/>
                <div>
                    <input type="checkbox" value="second_checkbox"/> <label className="text-input__aceppt">He leido y acepto las politicas de privacidad.</label>
                </div>
                <button className="btn-orange">Llámenme</button>
            </div>
        </div>
    )
}

export default Modals