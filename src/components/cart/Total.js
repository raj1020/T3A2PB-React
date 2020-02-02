import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../../styles/cart.css';

class Total extends Component{
    
    // componentWillUnmount() {
    //      if(this.refs.shipping.checked)
    //           this.props.subtractShipping()
    // }

    // handleChecked = (e)=>{
    //     if(e.target.checked){
    //         this.props.addShipping();
    //     }
    //     else{
    //         this.props.subtractShipping();
    //     }
    // }

    render(){
  
        return(
            <div>
            <Table className="tableHeader" striped bordered hover>
            <thead>
                <tr>
                <th colSpan="3">Shipping</th>
                <th>$10.00</th>
                </tr>
            </thead>
            </Table>
            <Table className="tableHeader" striped bordered hover>
            <thead>
                <tr>
                <th colSpan="3">TOTAL</th>
                <th>${this.props.total}.00</th>
                </tr>
            </thead>
            </Table>
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        subtractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)