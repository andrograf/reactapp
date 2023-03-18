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

`
const RightSection = styled.div`

`
const Title = styled.h1`

`
const WhatWeDo = styled.div`

`
const Line = styled.img`

`
const Text = styled.p`

`

const Button = styled.button`
 width: 100px;
 padding: 10px;
 background-color: #da4ea2;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
`

export default class Hero extends Component {
    render() {
        return (
            <Section>
                <Navbar />
                <Container>
                    <LeftSection>
                        <Title>Think. Make. Solve.</Title>
                        <WhatWeDo></WhatWeDo>
                        <Line src="./img/line.png"></Line>
                        <Text>Hello There</Text>
                        <Button>Learn more</Button>
                    </LeftSection>
                    <RightSection></RightSection>
                </Container>
            </Section>
        )
    }
}
