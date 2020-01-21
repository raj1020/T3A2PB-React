import React from 'react';
import styled from 'styled-components';

const Heading = styled.section`
    text-align: center;
`;

const subHeading = styled.section`
    text-align: center;
`;


class Home extends React.Component {


    render () {
        return (
            <>
            <Heading>
                <h1>Oakbrook</h1>
            </Heading>
            <subHeading>
                <h2>All Australian, organically managed olive grove and trufferie - Yass Valley, New South Wales.</h2>
            </subHeading>
            </>
        );
    }
}


export default Home;

