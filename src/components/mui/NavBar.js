import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './../../styles/index.css'

class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right width={ 250 }>
        <Link to="/" id="home" className="menu-item">Home</Link>
        <Link to="/ourstory" id="about" className="menu-item">Our Story</Link>
        <Link to="/products" id="products" className="menu-item">Products</Link>
        <Link to="/contact" id="contact" className="menu-item">Contact</Link>
        <Link to="/healthbenefits" id="healthbenefits" className="menu-item">Health Benefits</Link>
        <Link to="/retailers" id="retailers" className="menu-item">Retailers</Link>
        <Link to="/checkout" id="checkout" className="menu-item">Checkout</Link>
      </Menu>
    );
  }
}

export default NavBar;