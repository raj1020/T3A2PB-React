
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Total from '../cart/Total';
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartActions';
import '../../styles/cart.css';
import StripeCheckout from 'react-stripe-checkout'
import Api from '../../api/api'


class CartPage extends Component{
    state = {
        description: ''
    }

    setProduct=()=>{
        const description = (this.props.items.map((item)=>{
            return `${item.quantity} x ${item.size} ${item.name} ($${item.quantity*item.price})`
        })).join(' , ')
        this.setState({description})
    }

    componentDidMount=()=>{
        this.setProduct();
    }

    //to remove the item completely
    handleRemove = (_id)=>{
        this.props.removeItem(_id);
        this.setProduct();
    }
    //to add the quantity
    handleAddQuantity = (_id)=>{
        this.props.addQuantity(_id);
        this.setProduct();
    }
    //to substruct from the quantity
    handleSubtractQuantity = (_id)=>{
        this.props.subtractQuantity(_id);
        this.setProduct();
    }

    handleToken = async(token) => {
        const tokenId = token.id;
        const {total, items} = this.props;
        const {description} = this.state;
        const response = await Api.post('/orders', {
            tokenId,
            total,
            description
        });

        const { status } = response.data
        if (status === 'success'){
            items.forEach((item)=>{
                this.handleRemove(item._id);
            })
            this.props.history.push('/confirmation');
            
        } else {
            console.log('Fail');
        }
    }

    render(){
        let addedItems;
        try {
            const {total} = this.props
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
                                        <td className="rowWidth">                                
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
                    <h1 className="TextTitle">Shopping Cart</h1>
                    <div className="cartContainer">
                        <div className="cart">
                            <h5 className="subTitle">Your order:</h5>
                            <Table className="tableHeader" striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th className="row1Width" colSpan="2">Quantity</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th className="rowWidth"></th>
                                        </tr>
                                    </thead>
                            </Table>
                            <ul className="collection">
                                {addedItems}
                            </ul>
                        </div> 
                        <Total /> 
                        <br/>       
                        <div>
                            <StripeCheckout
                            label='Continue to Checkout'
                            className='paymentButton'
                            stripeKey={process.env.REACT_APP_STRIPE_KEY}
                            token={this.handleToken}
                            currency='AUD'
                            // allowRememberMe={false}
                            billingAddress
                            shippingAddress
                            amount={total*100}
                            name='Oakbrook'
                            />
                        </div>
                
                        <div className="shippingPolicy">
                            <h5 className="shippingTitle">Shipping Policy</h5>
                            <p>We offer FLAT RATE SHIPPING within Australia.</p>
                            <p>$15.00</p>
                            <p>All orders are calculated in Australian Dollars. Once orders are received they will be dispatched within 2 business days and are delivered direct to your door within 1 – 10 working days depending on your location.</p>
                        </div>
                    </div>
                </div>
        )
        } catch(err) {
            return(
                <div className="errorMessage">Oops, something went wrong!</div>
            )
        }
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems.addedItems,
        total: state.addedItems.total
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (_id)=>{dispatch(removeItem(_id))},
        addQuantity: (_id)=>{dispatch(addQuantity(_id))},
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        subtractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        subtractQuantity: (_id)=>{dispatch(subtractQuantity(_id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage)