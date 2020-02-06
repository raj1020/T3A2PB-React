import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../../styles/cart.css';


 class Products extends Component{
    handleClick = (_id)=>{
        this.props.addToCart(_id); 
    }

    render(){
        let items = this.props.items
        if (!items) {
            items=[] 
        } 
        let itemList;
        try {
        itemList = items.map(item=>{
            return(
                <Card className="ProductCard" key={item._id}>
                <Link className="imageContainer" to={`/product/${item._id}`}><Card.Img className="productImage" variant="top" src={`${process.env.REACT_APP_EXPRESS_URL}/user/${item.image}`} alt={item.name}/></Link>
                <Card.Body>
                    <Link to={`/product/${item._id}`} className="Link"><Card.Title className="productCardTitle">{item.name}</Card.Title></Link>
                    <div className="sizePrice">
                        <Card.Text>{item.size}</Card.Text>
                        <Card.Text>${item.price}.00</Card.Text>
                    </div>
                    <div 
                        to="/" 
                        className="addToCart" 
                        onClick={()=>{
                            this.handleClick(item._id)
                            alert(`${item.size} ${item.name} added to cart`)
                            }
                        }
                    >
                        <div>+ Add to Cart</div>
                    </div>
                </Card.Body>
                </Card>

            )
        })
        } catch(err){
            console.log(err)
            return(
                <div className="errorMessage" >Oops, something went wrong!</div>
            )
        }

        return(
            <div>
                <h1 className="TextTitle">Products</h1>
                <div className="productContainer">
                    <div className="box">
                        {itemList}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.addedItems.items,
      products: state.products.all
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (_id)=>{dispatch(addToCart(_id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)