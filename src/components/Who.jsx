import React, { Component, Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
//import Cube from './Cube';
//import Piggy from './Piggy';
import { Earth } from './Earth';





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

const Right = styled.div`
 flex: 2;
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 20px;
 padding: 5% 0% 0% 0%;
 animation: fadeIn 5s;

 "@keyframes fadeIn {  0% { opacity: 0; }  100% { opacity: 1; }}"
`

const Left = styled.div`
flex: 3;
position: relative;
padding: 10% 0% 10% 0%;
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
color: #ccfe65;
`

const Line = styled.img`
height: 5px;
padding: 10px 0;
`
const Description = styled.p`
font-size: 20px;
color: lightgray;
`



export default class Hero extends Component {
    render() {
        return (
            <Section id="introduction">
                <Container>
                    <Left>

                        <Canvas>
                            <Suspense fallback={null}>
                                <Earth />
                            </Suspense>
                        </Canvas>
                        
                    </Left>
                    <Right>
                        <Title>Ailing Planet</Title>
                        <WhatWeDo>
                            <Line src="./img/line.png"></Line>
                            <Subtitle>You can make difference</Subtitle>
                        </WhatWeDo>

                        <Description>
                            Ailing planet is all about the environment and to save it.
                            The message of it is that we should also do something to save our environment.
                            Due to the insensitive exploitation by humans for their survival and development, the earth has lost almost all its vital resources.
                            With drying rivers, depleted and polluted environment and deteriorated forests and greenery, 
                            the earth is now breathing hard for its survival and thus it is an ailing planet.
                        </Description>
                     
                    </Right>
                </Container>
            </Section>
        )
    }
}
