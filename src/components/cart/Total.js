import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../../styles/cart.css';

class Total extends Component{
    
    // componentDidMount() {
    //     if(this.props.total) {
    //         this.props.addShipping();
    //     }
    // }

    // componentWillUnmount() {
    //      if(this.refs.shipping.checked)
    //           this.props.subtractShipping()
    // }

    render(){
  
        return(
            <div>
            <Table className="tableHeader" striped bordered hover>
            <thead>
                <tr>
                <th colSpan="3">Shipping</th>
                <th className="rowWidth">$14.95</th>
                </tr>
            </thead>
            </Table>
            <Table className="tableHeader" striped bordered hover>
            <thead>
                <tr>
                <th colSpan="3">TOTAL</th>
                <th className="rowWidth">${this.props.total}.00</th>
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