import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table';
import '../../styles/cart.css';

class Total extends Component{
    
    componentDidMount() {
        const itemPrice = (this.props.items.map((item)=>{
            return item.quantity*item.price
        })).reduce((acc,cur)=>{
            return acc+cur
        }, 0)
        if(this.props.items.length>0 && this.props.total-itemPrice<15) {
            this.props.addShipping();
        }
    }

    componentDidUpdate(){
        if (this.props.items.length === 0 && this.props.total>0){
            this.props.subtractShipping();
        }
    }

    render(){
        return(
            <div>
            <Table className="tableHeader" striped bordered hover>
            <thead>
                <tr>
                <th colSpan="3">Shipping</th>
                <th className="rowWidth">$15.00</th>
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
        items: state.addedItems.addedItems,
        total: state.addedItems.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        subtractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)