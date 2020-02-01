import React, { Component } from 'react';
import Cart from './Cart'
// import { connect } from 'react-redux';
import '../../styles/cart.css';
// import Total from '../cart/Total';
import { Link } from "react-router-dom";

class CartPage extends Component{

render() {
    return(
        <div className="CartPageContainer">
            <h1 className="TextTitle">Shopping Cart</h1>
            <h5 className="subTitle">Your order:</h5>
            <Cart />
            {/* <Total />         */}
            <Link to="/checkout" addedItems={this.props.items}>
                <button className="paymentButton">Continue to Checkout</button>
            </Link>  
        </div>
        )
    }
}

// const mapStateToProps = (state)=>{
//     return{
//         items: state.addedItems,
//         //addedItems: state.addedItems
//     }
// }
export default CartPage;