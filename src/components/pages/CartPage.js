import React, { Component } from 'react';
import Cart from './Cart'
// import { connect } from 'react-redux';
import '../../styles/cart.css';


class CartPage extends Component{

render() {
    return(
        <div>
            <Cart />
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