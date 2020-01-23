import React from 'react';
import { BrowserRouter } from 'react-router-dom';


class NavBar extends React.Component {


    render () {
                
<<<<<<< HEAD
                return 
                <BrowserRouter> 
                <nav>
                    <Link to="/">Home</Link> <span> </span> 
                    <Link to="/ourstory">Our Story</Link>  <span> </span> 
                    <Link to="/products">Products</Link>  <span> </span> 
                    <Link to="/healthbenefits">Health Benefits</Link> <span> </span> 
                    <Link to="/retailers">Retailers</Link>  <span> </span> 
                    <Link to="/contact">Contact</Link>  <span> </span> 
                    <Link to="/checkout">Check Out</Link>  
                </nav>
                </BrowserRouter>

            // return <nav>{navLinks}</nav>


        
=======
            return 
            <BrowserRouter> 
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/HealthBenefits">Health Benefits</Link>
                </nav>
            </BrowserRouter>

            // return <nav>{navLinks}</nav>
>>>>>>> elliot2
    }
}

export default NavBar;