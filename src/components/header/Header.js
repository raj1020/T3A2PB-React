import React from 'react'
import logo from '../../images/logo3.jpg'
import './../../styles/index.css';

class Header extends React.Component {

    render() {
        return (
            <div class="header">
                <a href="/"><img className="logo" src={logo} alt="oakbrook logo"/></a>
                <div className="headerTitle">OAKBROOK</div>
            </div>
        );
    }
}

export default Header;