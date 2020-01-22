import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


class NavBar extends React.Component {


    render () {
                
            return (
            
                <nav>
                    <Link to="/">Home</Link> <span> </span> 
                    <Link to="/ourstory">Our Story</Link>  <span> </span> 
                    <Link to="/products">Products</Link>  <span> </span> 
                    <Link to="/healthbenefits">Health Benefits</Link> <span> </span> 
                    <Link to="/retailers">Retailers</Link>  <span> </span> 
                    <Link to="/contact">Contact</Link>  <span> </span> 
                    <Link to="/checkout">Check Out</Link>  
                </nav>
            );
           

            
    }
}

export default NavBar;