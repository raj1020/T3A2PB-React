import React from 'react';
import ig3b from '../../images/ig3b.jpg';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-directon: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: flex-start;
`;

const Card = styled.section`
    padding: 4em;
    background: green;
`;

class HealthBenefits extends React.Component {

    render () {
        return (
        <>
        <Container>
            <Card>
                <h1>Health Benefits</h1>
                <h2>Good quality olive oil has significant health benefits and tastes better.</h2>
                <img src={ig3b} alt="green olives on tree"/>
                <p>Just as bad fat can have a negative effect, good fat can work wonders. Those who are prepared to spend a little extra on cold-pressed (extra virgin) olive oil will be dunking their baguette in a soothing balm for their heart and blood vessels. Many studies have been carried out into the effects of olive oil, and results show that it can protect against arteriosclerosis, cellular stress, Alzheimer’s, and eye disease (such as macular degeneration). It also appears to have beneficial effects on inflammatory diseases such as rheumatic arthritis, and to help in protecting against certain kinds of cancer.
                </p>
                <p>
                Of particular interest to those fighting excessive weight is that olive oil also has the potential to help get rid of that spare tyre.  It blocks an enzyme in fatty tissue – known as fatty acid synthase – that likes to create fat out of spare carbohydrates.  And we are not the only ones who benefit from the properties of olive oil: the good bacteria in our gut also appreciate a little pampering. 
                </p>
                <p>
                Good quality olive oil costs a little bit more. However, it tastes neither greasy nor rancid, but rather green and fruity and sometimes leaves a peppery feeling in your throat after you swallow it.  This is due to the tannins it contains.
                </p>
                <p>
                Guilia Enders, internationally recognised medical doctor and scientist, from her best seller GUT: The inside Story of Our Body’s Most Underrated Organ.
                </p>
            </Card>
        </Container>
        </>
        );
    }
}

export default HealthBenefits;