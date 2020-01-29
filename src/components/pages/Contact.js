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
                        <Card.Title>Email:</Card.Title>
                            <Card.Text>
                                <p className="contactText">oakbrookyassvalley@gmail.com</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="contactCard">
                        <Card.Body>
                            <Card.Title>Phone:</Card.Title>
                            <Card.Text>
                                <p className="contactText">Rick Martin 0417 229 810</p>
                                <p className="contactText">Fiona Martin 0408 409 558</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                <h1 className="visitTitle">Visit Us</h1>
                <div className="Container2">
                <h2 className="subTitle">Visit us by appointment.</h2>
                <Card className="retailerCard">
                        <Card.Body>
                            <Card.Title>Ainslie IG</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Ainslie</Card.Subtitle>
                            <Card.Text>
                                9/11 Edgar St<br />
                                Ainslie<br />
                                ACT 2602
                            </Card.Text>
                            <Card.Link href="https://www.google.com/maps/place/IGA+Ainslie/@-35.261979,149.1427983,17z/data=!4m12!1m6!3m5!1s0x6b165288ba5ecfb1:0x8e0ec8ba4757254!2sIGA+Ainslie!8m2!3d-35.261979!4d149.144987!3m4!1s0x6b165288ba5ecfb1:0x8e0ec8ba4757254!8m2!3d-35.261979!4d149.144987" target="_blank" rel="noopener noreferrer">View in Google Maps</Card.Link>
                        </Card.Body>
                        </Card>
                </div>
            </div>
        
        )

    }
}

export default Contact;