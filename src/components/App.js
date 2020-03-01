import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import HealthBenefits from './pages/HealthBenefits';
import OurStory from './pages/OurStory';
import Products from './pages/Products';
import Confirmation from './pages/Confirmation';
import ShowProduct from './pages/ShowProduct';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './mui/NavBar';
import Footer from './header/Footer';
import Header from './header/Header';
import CartPage from './pages/CartPage';
import Api from '../api/api';
import { connect } from 'react-redux';
import { setProducts } from './../actions/setProducts';


 class App extends Component {
    constructor (props) {
        super(props);
        this.state = {location:'home'}
        Api.get('/user').then((response)=>{console.log(this.props.setProducts(response.data.products))})
    }

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
                        <Route exact path = "/cart" component = {CartPage} />
                        <Route exact path = "/healthbenefits" component = {HealthBenefits} />
                        <Route exact path = "/ourstory" component = {OurStory} />
                        <Route exact path = "/products" component = {Products} />
                        <Route exact path = "/confirmation" component = {Confirmation} />
                        <Route exact path = "/product/:id" component = {ShowProduct} />
                        <Route component={Home} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </React.Fragment>
            
        )
    }
}

export default connect(null, {setProducts})(App);
