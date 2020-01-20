import React from 'react';


class NavBar extends React.Component {


    render () {
                const pages = ['Home', 'Our Story', 'Products', 'Health Benefit', 'Retailers', 'Contact', 'Check Out'];
                const navLinks = pages.map(page => {
                    return (
                            <a href = {'/' + page}>
                                {page} 
                                <span> </span>
                            </a>
                    );
                });

            return <nav>{navLinks}</nav>


        
    }
}

export default NavBar;