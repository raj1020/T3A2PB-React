import React from 'react';
import styled from 'styled-components';
import image from './../../images/background1.jpg';
// import Header from './../header/Header';

const Container = styled.section`
    text-align: center;
    padding: 10vh;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    padding-bottom: 72px;
    font-family: 'Roboto', sans-serif;
`;

const SubHeading = styled.section`
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;


class Home extends React.Component {


    render () {
        return (
            <>
            {/* <Header /> */}
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

