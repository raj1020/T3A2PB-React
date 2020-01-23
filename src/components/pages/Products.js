import React, {Component} from 'react';
import api from '../../api/api'
import BootstrapCard from '../bootstrap/BootstrapCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Products extends Component {

    componentDidMount = async ()=>{
        const response = await api.get('/user')
        console.log(response.data[0])
    }

    render () {

        return (
        <Container>
            <h1>Products</h1>
            <Row>
                <Col>
                    <BootstrapCard className/>
                </Col>
                <Col>
                    <BootstrapCard />
                </Col>
            </Row>
            <Row>
                <Col>
                    <BootstrapCard />
                </Col>
                <Col>
                    <BootstrapCard />
                </Col>
            </Row>
        </Container>
        );
    }
}


export default Products;