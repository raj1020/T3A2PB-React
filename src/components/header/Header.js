import React from 'react'
// import banner from '../../images/banner.png'
import logo from '../../images/logo3.jpg'
import './../../styles/index.css';

class Header extends React.Component {

    render() {
        return (
            <div class="header">
                <img className="logo" src={logo} alt="oakbrook logo"/>
                <div className="headerTitle">OAKBROOK</div>
            </div>
        );
    }
}

export default Header;