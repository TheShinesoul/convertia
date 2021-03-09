import React, {useState} from 'react'
import '../assets/styles/header.scss'
import telephone from '../assets/img/icons/telephone.png'
import logotipo from '../assets/img/Logos/megacable.png'
import iconmaps from '../assets/img/icons/alfiler.svg'
import Modals from './Modals'


const Header = () => {
    const [modal, setModal] = React.useState(false)
    const [modalObject, setModalObject] = React.useState({})

    const showModal = (option) => {
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        setModal(true)
        if(option === 'telephone'){
            setModalObject( 'INIGUALABLE' )
        }else{
            setModalObject( 'CONSULTA TU COBERTURA' )
        }
    }

    return (
        <header>
            <img src={telephone} className="header-telephone" onClick={()=>{showModal('telephone')}}/>
            <img src={logotipo} className="logoTipo"/>
            <img src={iconmaps} className="header-maps"onClick={ () => { showModal('maps') }}/>
            {
                modal && <Modals title = { modalObject } setModal = {setModal}/>
            }        
        </header>
    )
}

export default Header;