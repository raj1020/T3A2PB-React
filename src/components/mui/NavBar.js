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
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/ourstory">Our Story</a>
        <a id="contact" className="menu-item" href="/products">Products</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/healthbenefits">Health Benefits</a>
        <a id="contact" className="menu-item" href="/retailers">Retailers</a>
        <a id="contact" className="menu-item" href="/checkout">Check Out</a>
      </Menu>
    );
  }
}

export default NavBar;