import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import Card from 'react-bootstrap/Card';
import '../../styles/cart.css';

class ShowProduct extends Component {
    getProduct() {
        const { id } = this.props.match.params;
        const { items } = this.props;

        return items.find(item => item._id === id);
    }

    handleClick = (_id) => {
        this.props.addToCart(_id); 
        
    }

    render () {
        const product = this.getProduct();
        console.log(product);
        if (product) {
            return (
                <div className = "formContainer">
                    <Card className="ProductCard" key={product._id}>
                        <Card.Img variant="top" src={`${process.env.REACT_APP_EXPRESS_URL}/user/${product.image}`} alt={product.name}/>
                        <Card.Body>
                            <Card.Title className="productCardTitle">{product.name}</Card.Title>
                                <div className="sizePrice">
                                    <Card.Text>{product.size}</Card.Text>
                                    <Card.Text>${product.price}.00</Card.Text>
                                </div>
                                <div>
                                    <Card.Text className="productDescription">{product.description}</Card.Text>
                                </div>
                                <div 
                                    to="/" 
                                    className="addToCart" 
                                    onClick={()=>{
                                        this.handleClick(product._id)
                                        alert(`${product.size} ${product.name} added to cart`)
                                        }
                                    }
                                >
                                    <div>+ Add to Cart</div>
                                 </div>
                        </Card.Body>
                    </Card>

                </div>
            );
        }
        
        return null;
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (_id)=>{dispatch(addToCart(_id))}
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ShowProduct);