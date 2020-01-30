import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import '../../styles/cart.css';


 class Products extends Component{
    
    handleClick = (_id)=>{
        this.props.addToCart(_id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item._id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.name}/>
                            <span className="card-title">{item.name}</span>
                            <span 
                                to="/" 
                                className="btn-floating halfway-fab waves-effect waves-light red" 
                                onClick={()=>{this.handleClick(item._id)}}>
                                    <i className="material-icons">add</i>
                            </span>
                        </div>

                        <div className="card-content">
                            <p>{item.description}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
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