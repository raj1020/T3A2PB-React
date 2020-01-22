import React from 'react';
import styled from 'styled-components';
import image from './../../images/background1.jpg';

const Container = styled.section`
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
            <Container>
                <h1>OAKBROOK</h1>
                <SubHeading>
                    <h2>Yass Valley, New South Wales</h2>
                    <h2>All Australian, organically managed olive grove and trufferie.</h2>
                </SubHeading>
            </Container>
            </>
        );
    }
}


export default Home;

