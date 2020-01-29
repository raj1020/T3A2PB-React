import React from 'react';
import Card from 'react-bootstrap/Card';
import './../../styles/index.css';



class Contact extends React.Component {


    render () {

        return (

            <div>
                <h1 className="TextTitle">Contact Us</h1>
                <div className="Container0">
                    <h2 className="subTitle">Get in touch with us!</h2>
                    <div className="Container1">
                    <Card className="contactCard">
                        <Card.Body>
                            <Card.Title>Phone:</Card.Title>
                            <Card.Text>
                                <p className="contactText">Rick Martin 0417 229 810</p>
                                <p className="contactText">Fiona Martin 0408 409 558</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="contactCard">
                        <Card.Body>
                        <Card.Title>Email:</Card.Title>
                            <Card.Text>
                                <p className="contactText">oakbrookyassvalley@gmail.com</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                <h1 className="visitTitle">Visit Us</h1>
                <div className="Container2">
                </div>
            </div>
        
        )

    }
}

export default Contact;