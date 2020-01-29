import React from 'react';
import './../../styles/index.css';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';


class Retailers extends React.Component {


    render () {
        return (
            <>
                <h1 className="TextTitle">Local Retailers</h1>
                <h2 className="subTitle">Find Oakbrook Extra Virgin Olive Oil in store at the following local retailers:</h2>
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Ainslie IGA</Card.Title>
                        <Card.Text>
                            9/11 Edgar St<br />
                            Ainslie<br />
                            ACT 2602
                        </Card.Text>
                        <Link to="/"><Card.Link>View in Google Maps</Card.Link></Link>
                    </Card.Body>
                    </Card>
                <div className="Container1"></div>
            </>
        );
    }
}


export default Retailers;