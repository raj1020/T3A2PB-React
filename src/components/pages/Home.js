import React from 'react';
import styled from 'styled-components';
import image1 from './../../images/background1.jpg';
import image2 from './../../images/background2.jpg';
import image3 from './../../images/background3.jpg';
import image4 from './../../images/background4.JPG';
// import oliveoilunsplash from './../../images/oliveoilunsplash.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// import HomeCarousel from './../mui/Carousel'
// import Header from './../header/Header';

const Container1 = styled.section`
    text-align: center;
    padding: 10vh;
    background-image: url(${image1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    padding-bottom: 72px;
    font-family: 'Geometria-Medium', sans-serif;
`;

const Container2 = styled.section`
    text-align: center;
    // padding: 10vh;
    background-image: url(${image2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    padding-bottom: 72px;
    font-family: 'Geometria-Medium', sans-serif;
`;

const Container3 = styled.section`
    text-align: center;
    // padding: 10vh;
    background-image: url(${image3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    position: relative;
    padding-bottom: 72px;
    font-family: 'Geometria-Medium', sans-serif;
`;

const Container4 = styled.section`
    text-align: center;
    // padding: 10vh;
    background-image: url(${image4});
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
    font-size: 24px;
    padding: 40px 0px
`;

class Home extends React.Component {


    render () {
        return (
            <>
            <Container1>
                <div>
                    <HomeTitle>OAKBROOK</HomeTitle>
                    <SubTitle>Yass Valley</SubTitle>
                    <HomeText>Rich & Robust, Cold Pressed Extra Virgin Olive Oil</HomeText>
                    <Link to="/products"><Button variant="primary">SHOP</Button></Link>
                </div>
            </Container1>
            <Container3>
                <div className='subTitle3'>All Australian owned and produced, organically managed olive grove and trufferie.</div>
            </Container3>
            <Container4>
                <div className='subTitle3'>We produce our boutique robust olive oil in the cool climate of Vass Valley, southern New South Wales</div>
            </Container4>
            <Container2>
                <div className='subTitle2'>Our extra virgin olive oil is unfiltered with no additives. <br /><br />We endeavour to be environmentally sustainable using biological pest and weed control. </div>
                <Link to="/products"><Button variant="primary">SHOP</Button></Link>
            </Container2>
            </>
        );
    }
}


export default Home;

