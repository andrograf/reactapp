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
`
export default class Hero extends Component {
    render() {
        return (
            <Section>
                <Navbar />
                <Container>
                    <LeftSection>
                        <Title>Think. Make. Solve.</Title>
                        <WhatWeDo>
                            <Line src="./img/line.png"></Line>
                            <Subtitle>Dictumst quisque sagittis purus sit amet.</Subtitle>
                        </WhatWeDo>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nulla facilisi cras fermentum odio eu feugiat pretium. Convallis posuere morbi leo urna molestie at elementum.
                            Nisl condimentum id venenatis a. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
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