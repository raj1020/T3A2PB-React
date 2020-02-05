import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/logo3.jpg'
import './../../styles/index.css';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Link to="/"><img className="logo" src={logo} alt="oakbrook logo"/></Link>
                <div className="headerTitle">OAKBROOK</div>
            </div>
        );
    }
}

export default Header;