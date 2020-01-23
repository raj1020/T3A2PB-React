import React, {Component} from 'react';
import api from '../../api/api'

class Products extends Component {

    componentDidMount = async ()=>{
        const response = await api.get('/user')
        console.log(response.data[0])
    }

    render () {
        
        return <h1>Fantastic and Fabulous Products</h1>
    }
}


export default Products;