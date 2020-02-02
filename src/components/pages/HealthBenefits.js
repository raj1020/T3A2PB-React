import React from 'react';
import olives2 from '../../images/olives2.jpg';
import Card from 'react-bootstrap/Card';
import './../../styles/index.css';



class HealthBenefits extends React.Component {

    render () {
        return (
            <>
                <h1 className="TextTitle">Health Benefits</h1>
                <div className="Container1">
                    <Card className="LimitWidth">
                            <Card.Img alt="green olives on tree" variant="top" src={olives2} />
                            <Card.Title className="CardTitle">Good quality olive oil has significant health benefits and tastes better</Card.Title>
                            <Card.Body>
                            <Card.Text>
                                <p>Just as bad fat can have a negative effect, good fat can work wonders. Those who are prepared to spend a little extra on cold-pressed (extra virgin) olive oil will be dunking their baguette in a soothing balm for their heart and blood vessels. Many studies have been carried out into the effects of olive oil, and results show that it can protect against arteriosclerosis, cellular stress, Alzheimer’s, and eye disease (such as macular degeneration). It also appears to have beneficial effects on inflammatory diseases such as rheumatic arthritis, and to help in protecting against certain kinds of cancer.
                                </p>
                                <p>
                                Of particular interest to those fighting excessive weight is that olive oil also has the potential to help get rid of that spare tyre.  It blocks an enzyme in fatty tissue – known as fatty acid synthase – that likes to create fat out of spare carbohydrates.  And we are not the only ones who benefit from the properties of olive oil: the good bacteria in our gut also appreciate a little pampering. 
                                </p>
                                <p>
                                Good quality olive oil costs a little bit more. However, it tastes neither greasy nor rancid, but rather green and fruity and sometimes leaves a peppery feeling in your throat after you swallow it.  This is due to the tannins it contains.
                                </p>
                                <p className='sourceReference'>
                                SOURCE: Guilia Enders, internationally recognised medical doctor and scientist, from her best seller GUT: The inside Story of Our Body’s Most Underrated Organ.
                                </p>
                            </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}

export default HealthBenefits;