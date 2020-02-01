import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../../styles/cart.css';


class ShowProduct extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render () {
        return (
            <div>
                {/* <Card className="ProductCard" key={this.props.items._id}>
                <Card.Img variant="top" src={this.props.items.img} alt={this.props.items.name}/>
                
                   <Card.Title>{this.props.items.name}</Card.Title>
                    <div className="sizePrice">
                        <Card.Text>{this.props.items.size}</Card.Text>
                        <Card.Text>${this.props.items.price}.00</Card.Text>
                    </div>
                    <div 
                        to="/" 
                        className="addToCart" 
                        onClick={()=>{
                            this.handleClick(this.props.items._id)
                            alert(`${this.props.items.size} ${this.props.items.name} added to cart`)
                            }
                        }
                    >
                        <div>+ Add to Cart</div>
                        </div>
                        
                </Card> */}
                        {this.props.id}
                   
                    </div>



            
        );
    }
}


export default ShowProduct;