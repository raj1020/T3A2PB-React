import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Contact from './Contact';
//import NavBar from './NavBar';
import Home from './Home';
import CheckOut from './CheckOut';
import HealthBenefits from './HealthBenefits';
import OurStory from './OurStory';
import Products from './Products';
import Retailers from './Retailers';
import ShowProduct from './ShowProduct';



 class App extends React.Component {

    render () {
        return (
            <>
            <BrowserRouter> 
                <Link to="/">Home</Link> <span> </span> 
                <Link to="/ourstory">Our Story</Link>  <span> </span> 
                <Link to="/products">Products</Link>  <span> </span> 
                <Link to="/healthbenefits">Health Benefits</Link> <span> </span> 
                <Link to="/retailers">Retailers</Link>  <span> </span> 
                <Link to="/contact">Contact</Link>  <span> </span> 
                <Link to="/checkout">Check Out</Link>  
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/contact" component = {Contact} />
                <Route exact path = "/checkout" component = {CheckOut} />
                <Route exact path = "/healthbenefits" component = {HealthBenefits} />
                <Route exact path = "/ourstory" component = {OurStory} />
                <Route exact path = "/products" component = {Products} />
                <Route exact path = "/retailers" component = {Retailers} />
                <Route exact path = "/showproduct" component = {ShowProduct} />


            </BrowserRouter>  
                
            </>
        )
    }
}

export default App;
