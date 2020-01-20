import React from 'react';
import { BrowserRouter } from 'react-router-dom';


class NavBar extends React.Component {


    render () {
                
                return 
                <BrowserRouter> 
                <nav>
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/HealthBenefits">Health Benefits</Link>
                </nav>
                </BrowserRouter>

            // return <nav>{navLinks}</nav>


        
    }
}

export default NavBar;