import React from 'react';
import styled from 'styled-components';
import image from './../../images/background1.jpg';
import Button from 'react-bootstrap/Button';
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
    font-family: 'Geometria-Medium', sans-serif;
`;

const HomeTitle = styled.section`
    padding: 80px 0px 0px 0px;
    font-size: 36px;
`;

const SubTitle = styled.section`
    font-family: 'Geometria-Medium', sans-serif;
    font-size: 24px;
`;

const HomeText = styled.section`
    font-family: 'Geometria-Medium', sans-serif;
    font-size: 15px;
    padding: 40px 0px
`;

class Home extends React.Component {


    render () {
        return (
            <>
            {/* <Header /> */}
            <Container>
                <div>
                    <HomeTitle>OAKBROOK</HomeTitle>
                    <SubTitle>Yass Valley</SubTitle>
                    <HomeText>All Australian, organically managed olive grove and trufferie.</HomeText>
                    <Button href="/products" variant="primary">SHOP</Button>
                </div>
            </Container>
            </>
        );
    }
}


export default Home;

