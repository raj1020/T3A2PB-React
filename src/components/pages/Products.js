import React from 'react';
import api from '../../api/api'

class Products extends React.Component {

    componentDidMount = async ()=>{
        const response = await api.get('/user')
        console.log(response)
    }

    render () {
        
        return <h1>Fantastic and Fabulous Products</h1>
    }
}


export default Products;