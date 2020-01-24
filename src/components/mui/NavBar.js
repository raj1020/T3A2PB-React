import React from 'react';
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
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="about" className="menu-item" href="/ourstory">OUR STORY</a>
        <a id="products" className="menu-item" href="/products">PRODUCTS</a>
        <a id="contact" className="menu-item" href="/contact">CONTACT</a>
        <a id="healthbenefits" className="menu-item" href="/healthbenefits">HEALTH BENEFITS</a>
        <a id="retailers" className="menu-item" href="/retailers">RETAILERS</a>
        <a id="checkout" className="menu-item" href="/checkout">CHECK OUT</a>
      </Menu>
    );
  }
}

export default NavBar;