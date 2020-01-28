import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroupItem';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import logoSm from '../../images/logo-sm.png'
import './../../styles/bootstrap.css';


class BootstrapCard extends React.Component {

    // defaultOilSize = () => {
    //     let productSize = Products[1][size];
    //     return productSize;
    // }
    
    render() {
        const { productName, productSize, productPrice }=this.props;

        return (
            <Card className="ProductCard">
                <a href="/"><Card.Img variant="top" src={logoSm} /></a>
                <Card.Body>
                    <a className="Link" href="/"><Card.Title>{productName}</Card.Title></a>
                    <Card.Link href="#">${productPrice}.00</Card.Link>
                    <Card.Link href="#">Buy</Card.Link>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Extra Virgin Olive Oil</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}

export default BootstrapCard;

