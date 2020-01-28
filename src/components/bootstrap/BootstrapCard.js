import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroupItem';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import logoSm from '../../images/logo-sm.png'
import './../../styles/bootstrap.css';


class BootstrapCard extends React.Component {
    
    render() {
        const { productName, productSize }=this.props;

        return (
            <Card className="ProductCard">
                <a href="/"><Card.Img variant="top" src={logoSm} /></a>
                <Card.Body>
                    <a className="Link" href="/"><Card.Title>{productName}</Card.Title></a>
                    <DropdownButton id="dropdown-basic-button" title={productSize}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Card.Link href="#">$10.00</Card.Link>
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

