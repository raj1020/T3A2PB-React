import React from 'react'
import { Link } from "react-router-dom";
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
                <Link to="/"><Card.Img variant="top" src={logoSm} /></Link>
                <Card.Body>
                    <Link to="/" className="Link"><Card.Title>{productName}</Card.Title></Link>
                    <Card.Link href="#">${productPrice}.00</Card.Link>
                    <Card.Link href="#">Add to Cart</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default BootstrapCard;

