import React from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
// import CheckOut from './pages/CheckOut';
import HealthBenefits from './pages/HealthBenefits';
import OurStory from './pages/OurStory';
import Products from './pages/Products';
import Retailers from './pages/Retailers';
import ShowProduct from './pages/ShowProduct';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './mui/NavBar';
import Footer from './header/Footer';
import Header from './header/Header';
import Cart from './pages/Cart';
// import Styled from 'styled-components';


 class App extends React.Component {
     state = { location: "home" }

    render () {
        return (
            <React.Fragment>
                <CssBaseline />
                <BrowserRouter> 
                <Header />
                <NavBar />
                    <Switch>
                        <Route exact path = "/" component = {Home} />
                        <Route exact path = "/contact" component = {Contact} />
                        <Route exact path = "/shoppingcart" component = {Cart} />
                        <Route exact path = "/healthbenefits" component = {HealthBenefits} />
                        <Route exact path = "/ourstory" component = {OurStory} />
                        <Route exact path = "/products" component = {Products} />
                        <Route exact path = "/retailers" component = {Retailers} />
                        <Route exact path = "/showproduct" component = {ShowProduct} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </React.Fragment>
            
        )
    }
}

export default App;
