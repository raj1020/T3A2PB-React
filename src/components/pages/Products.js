import React, {Component} from 'react';
import api from '../../api/api';
import BootstrapCard from '../bootstrap/BootstrapCard';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import './../../styles/bootstrap.css';

class Products extends Component {

    componentDidMount = async ()=>{
        const response = await api.get('/user')
        console.log(response.data[0])
    }

    render () {

        return (
        <Container>
            <CardDeck className="ProductCardDeck">
                <Row className="RowPosition">
                    <BootstrapCard className="ProductCard"/>
                    <BootstrapCard />
                </Row>
            </CardDeck>
            <CardDeck className="ProductCardDeck">
                <Row>
                    <BootstrapCard />
                    <BootstrapCard />
                </Row>
            </CardDeck>
        </Container>
        );
    }
}

export default Products;