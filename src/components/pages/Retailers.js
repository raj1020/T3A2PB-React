import React from 'react';
import './../../styles/index.css';
import Card from 'react-bootstrap/Card';


class Retailers extends React.Component {


    render () {
        return (
            <>
                <h1 className="TextTitle">Local Retailers</h1>
                <div className="Container0">
                    <h2 className="subTitle">Find Oakbrook Extra Virgin Olive Oil in store at the following local retailers:</h2>
                    <div className="Container1">
                        <Card className="retailerCard">
                        <Card.Body>
                            <Card.Title>Ainslie IGA</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Ainslie</Card.Subtitle>
                            <Card.Text>
                                9/11 Edgar St<br />
                                Ainslie<br />
                                ACT 2602
                            </Card.Text>
                            <Card.Link href="https://www.google.com/maps/place/IGA+Ainslie/@-35.261979,149.1427983,17z/data=!4m12!1m6!3m5!1s0x6b165288ba5ecfb1:0x8e0ec8ba4757254!2sIGA+Ainslie!8m2!3d-35.261979!4d149.144987!3m4!1s0x6b165288ba5ecfb1:0x8e0ec8ba4757254!8m2!3d-35.261979!4d149.144987" target="_blank" rel="noopener noreferrer">View in Google Maps</Card.Link>
                        </Card.Body>
                        </Card>
                        <Card className="retailerCard">
                        <Card.Body>
                            <Card.Title>Big Green Cup Cafe</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Bungendore</Card.Subtitle>
                            <Card.Text>
                                7-10/23 Malbon St<br />
                                Bungendore<br />
                                NSW 2621<br />
                            </Card.Text>
                            <Card.Link href="https://www.google.com/maps/place/THE+BIG+GREEN+CUP+CAFE+%7C+EMPORIUM+%7C+REDEFINED/@-35.2565292,149.4385459,17z/data=!4m12!1m6!3m5!1s0x6b165e69cde30e8b:0xb8e53cfc55cee346!2sTHE+BIG+GREEN+CUP+CAFE+%7C+EMPORIUM+%7C+REDEFINED!8m2!3d-35.2565292!4d149.4407346!3m4!1s0x6b165e69cde30e8b:0xb8e53cfc55cee346!8m2!3d-35.2565292!4d149.4407346" target="_blank" rel="noopener noreferrer">View in Google Maps</Card.Link>
                        </Card.Body>
                        </Card>
                        <Card className="retailerCard">
                        <Card.Body>
                            <Card.Title>The Grumpy Baker</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Castle Cove</Card.Subtitle>
                            <Card.Text>
                                16 Deepwater Rd<br />
                                Castle Cove<br />
                                NSW 2069<br />
                            </Card.Text>
                            <Card.Link href="https://www.google.com/maps/place/The+Grumpy+Baker/@-33.7826713,151.1984023,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12a917a509647b:0xef155dd5fb1e53f5!8m2!3d-33.7826713!4d151.200591" target="_blank" rel="noopener noreferrer">View in Google Maps</Card.Link>
                        </Card.Body>
                        </Card>
                        <Card className="retailerCard">
                        <Card.Body>
                            <Card.Title>The Grumpy Baker</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Waverton</Card.Subtitle>
                            <Card.Text>
                                85 Bay Rd<br />
                                Waverton<br />
                                NSW 2060<br />
                            </Card.Text>
                            <Card.Link href="https://www.google.com/maps/place/The+Grumpy+Baker+Waverton/@-33.8380372,151.1937833,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12aefa5e19db81:0x396161b52357b02d!8m2!3d-33.8380372!4d151.195972" target="_blank" rel="noopener noreferrer">View in Google Maps</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </>
        );
    }
}


export default Retailers;