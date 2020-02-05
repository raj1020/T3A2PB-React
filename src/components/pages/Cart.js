import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Total from '../cart/Total';
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartActions';
import '../../styles/cart.css';


class Cart extends Component{

    // componentDidMount() {
    //     console.log(this.props.addedItems);
    // }

    //to remove the item completely
    handleRemove = (_id)=>{
        this.props.removeItem(_id);
    }
    //to add the quantity
    handleAddQuantity = (_id)=>{
        this.props.addQuantity(_id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (_id)=>{
        this.props.subtractQuantity(_id);
    }
    render(){
        let addedItems;
        try {   
            addedItems = this.props.items.length ?
                (  
                    this.props.items.map(item=>{
                        return(
                        
                            <li className="purchaseItem" key={item._id}>
                                <Table className="tableHeader" striped bordered hover>
                                    <tbody>
                                        <tr>
                                        <td>
                                            <span className="add-remove">
                                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item._id)}}>arrow_drop_up</i></Link>
                                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item._id)}}>arrow_drop_down</i></Link>
                                            </span>
                                        </td>
                                        <td>
                                            <span>{item.quantity}</span>

                                        </td>
                                        <td>{item.size} {item.name}</td>
                                        <td>${item.price}.00</td>
                                        <td>                                
                                            <button onClick={()=>{this.handleRemove(item._id)}}>Remove</button>
                                        </td>
                                        </tr>
                                    </tbody>
                                </Table>                                    
                            </li>
                            
                        )
                    })
                ):

                (
                    <p className="cartEmpty">Nothing in cart</p>
                )
            return(
                <div>
                    {/* <h1 className="TextTitle">Shopping Cart</h1> */}
                    <div className="cartContainer">
                        <div className="cart">
                            {/* <h5 className="subTitle">Your order:</h5> */}
                            <Table className="tableHeader" striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th colSpan="2">Quantity</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                            </Table>
                            <ul className="collection">
                                {addedItems}
                            </ul>
                        </div> 
                        <Total />        
                        {/* <Link to="/checkout" addedItems={this.props.items}>
                                <button className="paymentButton">Continue to Checkout</button>
                        </Link>   */}
                    </div>
                </div>
        )
    
        } catch (err) {
            return (
            <div className="errorMessage">Oops, something went wrong!</div>
            )
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (_id)=>{dispatch(removeItem(_id))},
        addQuantity: (_id)=>{dispatch(addQuantity(_id))},
        subtractQuantity: (_id)=>{dispatch(subtractQuantity(_id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart)