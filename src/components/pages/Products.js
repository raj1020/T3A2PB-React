import React, {Component} from 'react';
import api from '../../api/api';
import BootstrapCard from '../bootstrap/BootstrapCard';
import CardDeck from 'react-bootstrap/CardDeck';
import './../../styles/bootstrap.css';

class Products extends Component {

    componentDidMount = async ()=>{
        const response = await api.get('/user')
        console.log(response.data[0])
    }

    render () {

        const Products = [
            {_id:'1', name: 'Extra Virgin Olive Oil 250ml', description:"Extra virgin olive oil", price: 11.00, size: "250mL", count: 10, available: true },
            {_id:'2', name: 'Extra Virgin Olive Oil 500ml', description:"Extra virgin olive oil", price: 16.00, count: 10, size: "500mL", available: true },
            {_id:'3', name: 'Extra Virgin Olive Oil 3L', description:"Extra virgin olive oil", price: 65.00, count: 10, size: "3L", available: true },
            {_id:'4', name: 'Extra Virgin Olive Oil 20L', description:"Extra virgin olive oil", price: 230.00, count: 10, size: "20L", available: false },
            {_id:'5', name: 'Jar of Black Olives 200g', description:"A jar of olives", price: 8.00, count: 10, size: "200g", available: true },
            {_id:'6', name: 'Jar of Green Olives 200g', description:"A jar of olives", price: 8.00, count: 10, size: "200g", available: true }
        ]

        return (
            <CardDeck className="ProductCardDeck">
                { Products.map((product) =>  {

                    return (
                    <BootstrapCard productName={product.name} productPrice={product.price} productSize={product.size}/>
                    );
                })
            }
                    
            </CardDeck>
        );
    }
}

export default Products;