import React from 'react'
import '../assets/styles/home.scss'
import home1 from '../assets/img/home1.png'
import home2 from '../assets/img/home2.png'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="column row home-component">
            <div className="column col-12 col-sm-12 col-md-6">
                <div className="home-card contrata"
                    style={{ background: `url(${home1})` }}>
                    <div className="home-text">
                        <p>
                            <span className="home-card__text">INIGUALABLE</span>
                        </p>
                        <p>
                            <span className="home-card__text">INCOMPARABLE</span>
                        </p>
                        <p>
                            <span className="home-card__text">INCREÍBLE</span>
                        </p>
                    </div>
                    <Link to="/contrata">
                        <button className="home-button home-button-blue">
                            Contrata Hoy
                        </button>
                    </Link>
                </div>
                <div className="velo"></div>
            </div>
            <div className="column col-12 col-md-6">
                <div className="home-card cliente"
                    style={{ backgroundImage: `url(${home2})` }}>
                    <Link to="/404">
                        <button className="home-button home-button-orange">
                            Eres cliente y necesitas Ayuda
                        </button>
                    </Link>
                </div>
                <div className="velo"></div>
            </div>
        </div>
    )
}

export default Home;