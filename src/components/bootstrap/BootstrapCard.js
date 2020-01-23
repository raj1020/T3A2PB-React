import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroupItem';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import logoSm from '../../images/logo-sm.png'

class BootstrapCard extends React.Component {
    
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logoSm} />
                <Card.Body>
                    <Card.Title>Product 1</Card.Title>
                    <Card.Text>
                    Olive Oil
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Extra Virgin Olive Oil</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">$10.00</Card.Link>
                    <Card.Link href="#">Buy</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default BootstrapCard;

