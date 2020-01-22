import React from 'react';
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

class OurStory extends React.Component {

    render () {
        return (
            <>
             <h1>Our Story</h1>
             <p>Oakbrook is a small, boutique olive grove of approximately 1,000 trees in two groves (each of 500 or so trees) on the Eastern edge of Yass Valley near Gundaroo, NSW.  The location at an altitude of 700m in the Southern Tablelands provides a cool climate so beneficial for the production of premium quality olive oil that is both nicer and better for you.</p>
             <p>When we took on Oakbrook in late 2017 we began a very steep and enjoyable learning curve, both with truffles and olives.  Learning about insects attacks, watering needs, how and when to harvest and market is still hugely time consuming.  </p>
             <h2>Olives</h2>
             <p>We manage our olive grove organically and do not use hazardous chemical poisons. We have introduced predator insects to controls pests plus implemented an organic fertiliser and mulching program. We do our own pruning by hand.</p>
             <p>Our oil is produced from hand-picked olives harvested between ANZAC Day and the end of May each year. The olives are then pressed within 24 hours of picking.  This cold pressed oil is unfiltered, with no flavouring, no additives and no preservatives that is certified as Cold Pressed Extra Virgin Olive Oil after samples are sent away to the Department of Industry for testing. </p>
             <p>Once back at Oakbrook we provide the oil with the ideal environment to preserve quality and promote longevity keep it in a cool dark place and air tight.  Our olive oil is stored in our underground cellar in sealed containers with natural stable temperature that year round is between 10 to15oC.  </p>
             <p>The premium olive oil we produce has a slight green tinge compared with commercial oils grown in a hotter climate. It is medium to robust, leaving a pleasing peppery taste at the back of the throat.</p>
             <p>About 1 to 2 months after harvest, when the oil has settled, it is decanted to separate it from any sediment which has settled, leaving pure, clear olive oil which is bottled when needed.</p>
             <h2>Truffles</h2>
             <p>Alongside the olive trees is a Trufferie of 200 oak trees, alternating Quercus robur (English Oak) and Quercus ilex (Holly Oak).</p>
            <p>In 2018 and 2019 good quality Tuber melanosporum French Black Truffles, were harvested, we are looking forward to 2020 harvest!</p>
            <p>The trees were planted in 2012 and a continuing increase in production is expected each year, particularly up to the tenth year when it apparently plateaus to some degree.  </p>
            </>
        );
    }
}


export default OurStory;