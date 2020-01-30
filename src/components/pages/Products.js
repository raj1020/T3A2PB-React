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
        let itemList = this.props.items.map(item=>{
            return(
                <Card className="ProductCard" key={item._id}>
                <Link to="/"><Card.Img variant="top" src={item.img} alt={item.name}/></Link>
                <Card.Body>
                    <Link to="/" className="Link"><Card.Title>{item.name}</Card.Title></Link>
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
            

                // <Card className="ProductCard" key={item._id}>
                //         <div className="card-image">
                //             <img src={item.img} alt={item.name}/>
                //             <div className="card-title">{item.name}</div>
                //             <span 
                //                 to="/" 
                //                 className="btn-floating halfway-fab waves-effect waves-light red" 
                //                 onClick={()=>{this.handleClick(item._id)}}>
                //                     <i className="material-icons">add</i>
                //             </span>
                //             <span><b>Price: {item.price}$</b></span>
                //         </div>

                //         <div className="card-content">
                //             {/* <p>{item.description}</p> */}
                //             <p><b>Price: {item.price}$</b></p>
                //         </div>
                //  </Card>

            )
        })

        return(
            <div>
                <h1 className="TextTitle">Products</h1>
                <div className="container">
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
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (_id)=>{dispatch(addToCart(_id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)