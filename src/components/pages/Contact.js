import React from 'react';
import Card from 'react-bootstrap/Card';
import './../../styles/index.css';



class Contact extends React.Component {


    render () {

        return (

            <div>
                <h1 className="TextTitle">Contact Us</h1>
                <div className="Container0">
                    {/* <h2 className="subTitle">Get in touch with us!</h2> */}
                    <div className="Container1">
                    <Card className="contactCard">
                        <Card.Body>
                        <Card.Title className="contactCardTitle">Email:</Card.Title>
                            <Card.Text>
                                <span className="contactText">oakbrookyassvalley@gmail.com</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="contactCard">
                        <Card.Body>
                            <Card.Title className="contactCardTitle">Phone:</Card.Title>
                            <Card.Text>
                                <span className="contactText">Rick Martin 0417 229 810</span><br /><br />
                                <span className="contactText">Fiona Martin 0408 409 558</span>
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
                            <Card.Title>Oakbrook</Card.Title>
                            <Card.Text>
                                230 Shingle Hill Way<br />
                                Gundaroo<br />
                                NSW 2620
                            </Card.Text>
                            <Card.Link href="https://www.google.com.au/maps/place/Oakbrook,+230+Shingle+Hill+Way,+Gundaroo+NSW+2620/@-35.1241252,149.321806,281m/data=!3m2!1e3!4b1!4m5!3m4!1s0x6b16f707afb92267:0x4354d6e99baac490!8m2!3d-35.1241252!4d149.3228429" target="_blank" rel="noopener noreferrer">View in Google Maps</Card.Link>
                        </Card.Body>
                        </Card>
                </div>
            </div>
        
        )

    }
}

export default Contact;