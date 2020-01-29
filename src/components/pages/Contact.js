import React from 'react';
import Card from 'react-bootstrap/Card';
import './../../styles/index.css';



class Contact extends React.Component {


    render () {

        return (

            <div>
                <h1 className="TextTitle">Contact Us</h1>
                <h2 className="subTitle">Get in touch with us!</h2>
                <div className="Container1">
                <Card className="contactCard">
                    <Card.Body>
                        <Card.Title>Phone</Card.Title>
                        <Card.Text>
                            Rick Martin 0417 229 810<br />
                            Fiona Martin 0408 409 558<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="contactCard">
                    <Card.Body>
                    <Card.Title>Email</Card.Title>
                        <Card.Text>
                            oakbrookyassvalley@gmail.com
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        
        )

    }
}

export default Contact;