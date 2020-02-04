import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Form from 'react-bootstrap/Form';
// import Cart from './Cart';
import './../../styles/index.css';


class Confirmation extends Component {
  
      render() {
        return (
        <div>
        <h1 className="TextTitle">Order Confirmation</h1>
            <div className="orderContainer">
                <div className="textContainer">
                    <p className="confirmationText">Thank you for your purchase.</p>
                    <p className="confirmationText">An invoice has been sent to your email.</p>
                    <p className="confirmationText">We will send you an email when your order has been shipped.</p>
                </div>
                {/* <Cart /> */}
            </div>
        </div>
        );
      }
  }
  
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
        //addedItems: state.addedItems
    }
}

  export default connect(mapStateToProps)(Confirmation);