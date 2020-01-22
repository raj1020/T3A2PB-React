import React from 'react';
import styled from 'styled-components';
import image from './../../images/background1.jpg';

const Heading = styled.section`
    text-align: center;
    padding: 10vh;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 80vh;
    position: relative;
    padding-bottom: 72px;
`;

const SubHeading = styled.section`
    text-align: center;
`;


class Home extends React.Component {


    render () {
        return (
            <>
            <Heading>
                <h1>Oakbrook</h1>
            </Heading>
            <SubHeading>
                <h2>All Australian, organically managed olive grove and trufferie - Yass Valley, New South Wales.</h2>
            </SubHeading>
            </>
        );
    }
}


export default Home;

