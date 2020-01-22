import React from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Contact from './pages/Contact';
import NavBar from './NavBar';
import Home from './pages/Home';
import CheckOut from './pages/CheckOut';
import HealthBenefits from './pages/HealthBenefits';
import OurStory from './pages/OurStory';
import Products from './pages/Products';
import Retailers from './pages/Retailers';
import ShowProduct from './pages/ShowProduct';
// import Styled from 'styled-components';

 class App extends React.Component {
     state = { location: "home" }

    render () {
        return (
            <>
            <BrowserRouter> 
                    <NavBar />
                <Switch>
                    <Route exact path = "/" component = {Home} />
                    <Route exact path = "/contact" component = {Contact} />
                    <Route exact path = "/checkout" component = {CheckOut} />
                    <Route exact path = "/healthbenefits" component = {HealthBenefits} />
                    <Route exact path = "/ourstory" component = {OurStory} />
                    <Route exact path = "/products" component = {Products} />
                    <Route exact path = "/retailers" component = {Retailers} />
                    <Route exact path = "/showproduct" component = {ShowProduct} />
                </Switch>
            </BrowserRouter>  
            </>
        )
    }
}

export default App;
