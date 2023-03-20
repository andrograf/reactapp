import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: space-between;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
  display: flex;
justify-content: space-between;
`

const LeftSection = styled.div`
 flex: 2;
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 20px;
`
const RightSection = styled.div`
flex: 3;
position: relative;
`
const Title = styled.h1`
font-size: 75px;
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const Subtitle = styled.h2`
color: #8fce00;
`

const Line = styled.img`
height: 5px;
padding: 10px 0;
`
const Description = styled.p`
font-size: 20px;
color: lightgray;
`

const Button = styled.button`
 width: 100px;
 padding: 10px;
 background-color: #8fce00;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 font-weigth: 500;
`

const Img = styled.img`
width: 350px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate{
    to{
        transform: translateY(20px);
    }

}
`
export default class Hero extends Component {
    render() {
        return (
            <Section>
                <Navbar />
                <Container>
                    <LeftSection>
                        <Title>Think. Make. Be Green.</Title>
                        <WhatWeDo>
                            <Line src="./img/line.png"></Line>
                            <Subtitle>Help to make the world a better place</Subtitle>
                        </WhatWeDo>

                        <Description>
                            We aims at creating a holistic and ecological view of the world.
                            We want to make the people conscious of stopping further degradation and deterioration of nature and its resources.
                        </Description>
                        <Button>Learn more</Button>
                    </LeftSection>
                    <RightSection>
                        <Img src="./img/greenGround.png"/>
                    </RightSection>
                </Container>
            </Section>
        )
    }
}
