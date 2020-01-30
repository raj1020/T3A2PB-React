import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Total from '../cart/Total';
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartActions';
import '../../styles/cart.css';


class Cart extends Component{

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
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item._id}>
                            <Card className="cartCard" key={item._id}>
                            <Card.Body>
                                <Link to="/" className="Link"><Card.Title>{item.name}</Card.Title></Link>
                                <div className="sizePrice">
                                    <Card.Text>{item.size}</Card.Text>
                                    <Card.Text>${item.price}.00</Card.Text>
                                </div>
                                <p>
                                    <b>Quantity: {item.quantity}</b> 
                                </p>
                                <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item._id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item._id)}}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item._id)}}>Remove</button>
                            </Card.Body>
                            </Card>
                                    
                        </li>
                         
                    )
                })
            ):

             (
                <p>Nothing in cart</p>
             )
       return(
            <div>
                <h1 className="TextTitle">Shopping Cart</h1>
                <div className="cartContainer">
                    <div className="cart">
                        <h5 className="subTitle">Your order:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div> 
                    <Total />          
                </div>
            </div>
       )
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