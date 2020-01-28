import React from 'react';
import Card from 'react-bootstrap/Card';
import birdseye from '../../images/birdseye.JPG';
import olives from '../../images/olives.jpg';
import truffles from '../../images/truffles.jpg';
import production from '../../images/production.jpg';
import './../../styles/index.css';

class OurStory extends React.Component {

    render () {
        return (
            <>
                <h1 className="TextTitle">Our Story</h1>
                <div className="Container1">
                    <Card className="LimitWidth">
                        <Card.Img alt="birdseye view of Oakbrook Yall Valley farm" variant="top" src={birdseye} />
                        <Card.Title className="CardTitle">The Farm</Card.Title>
                        <Card.Body>
                        <Card.Text>
                        <p>Oakbrook is a small, boutique olive grove of approximately 1,000 trees in two groves (each of 500 or so trees) on the Eastern edge of Yass Valley near Gundaroo, NSW.  The location at an altitude of 700m in the Southern Tablelands provides a cool climate so beneficial for the production of premium quality olive oil that is both nicer and better for you.</p>
                        <p>When we took on Oakbrook in late 2017, we began a very steep and enjoyable learning curve, both with truffles and olives. Learning about insects attacks, watering needs, how and when to harvest and market is still hugely time consuming.  </p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="LimitWidth">
                        <Card.Img alt="close-up of freshly picked olives from Oakbrook olive grove NSW" variant="top" src={olives} />
                        <Card.Title className="CardTitle">Olives</Card.Title>
                        <Card.Body>
                        <Card.Text>
                        <p>We manage our olive grove organically and do not use hazardous chemical poisons. We have introduced predator insects to controls pests plus implemented an organic fertiliser and mulching program. We do our own pruning by hand.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="LimitWidth">
                        <Card.Img alt="freshly pressed Oakbrook olive oil in production" variant="top" src={production} />
                        <Card.Title className="CardTitle">Olive Oil</Card.Title>
                        <Card.Body>
                        <Card.Text>
                            <p>The premium olive oil we produce has a slight green tinge compared with commercial oils grown in a hotter climate. It is medium to robust, leaving a pleasing peppery taste at the back of the throat.</p>
                            <p>Our oil is produced from hand-picked olives harvested between ANZAC Day and the end of May each year. The olives are then pressed within 24 hours of picking.  This cold pressed oil is unfiltered, with no flavouring, no additives and no preservatives that is certified as Cold Pressed Extra Virgin Olive Oil after samples are sent away to the Department of Industry for testing. </p>
                            <p>About 1 to 2 months after harvest, when the oil has settled, it is decanted to separate it from any sediment which has settled, leaving pure, clear olive oil which is bottled when needed.</p>
                            <p>Once back at Oakbrook we provide the oil with the ideal environment to preserve quality and promote longevity keep it in a cool dark place and air tight.  Our olive oil is stored in our underground cellar in sealed containers with natural stable temperature that year round is between 10 to 15 degrees.  </p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="LimitWidth">
                        <Card.Img alt="Freshly picked truffles from Oakbrook Yass Vally NSW" variant="top" src={truffles} />
                        <Card.Title className="CardTitle">Truffles</Card.Title>
                        <Card.Body>
                        <Card.Text>
                            <p>Alongside the olive trees is a Trufferie of 200 oak trees, alternating Quercus robur (English Oak) and Quercus ilex (Holly Oak).</p>
                            <p>In 2018 and 2019 good quality Tuber melanosporum French Black Truffles, were harvested, we are looking forward to 2020 harvest!</p>
                            <p>The trees were planted in 2012 and a continuing increase in production is expected each year, particularly up to the tenth year when it apparently plateaus to some degree.</p>  
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}


export default OurStory;