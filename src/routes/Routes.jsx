import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Contrata from '../components/Contrata'
import NotFound from '../components/NotFound'


const Routes = () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/contrata" component={Contrata}/>
            <Route path="/404" component={NotFound}/>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes