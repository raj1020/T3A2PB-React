import React from 'react';


class NavBar extends React.Component {


    render () {
                const pages = ['Home', 'Our Story', 'Products', 'Health Benefit', 'Retailers', 'Contact', 'Check Out'];
                const navLinks = pages.map(page => {
                    return (
                        <span>  
                            <a href = {'/' + page}>
                                {page} 
                                
                            </a>
                            <span> </span>
                            <span> </span>
                        </span>

                    );
                });

            return <nav>{navLinks}</nav>


        
    }
}

export default NavBar;