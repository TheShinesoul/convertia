import React from 'react'
import Header from '../components/Header'
import '../assets/styles/app.scss'
import Routes from '../routes/Routes'
import Modals from '../components/Modals'

const App = () => {
    return(
        <div className="app">
            <Routes/>
        </div>
    )
}

export default App