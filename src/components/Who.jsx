import React, { Component, Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
//import Cube from './Cube';
//import Piggy from './Piggy';
import Earth from './Earth';
import EarthTwo from './EarthNoShadow';
import NewEarth from './Newearth';




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
`

const Left = styled.div`
flex: 3;
position: relative;
padding: 15% 0% 15% 0%;
`
const Frame = styled.div`


display: flex;
align-items: center;
padding: 10% 0 10% 0;
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
                <Container>
                    <Left>
                        {/*<Canvas camera={{ fov: 25, position: [4, 4, 4] }} >*/}
                        {/*    <OrbitControls enableZoom={false} autoRotate />*/}
                        {/*    <ambientLight intersiti={3} />*/}
                        {/*    <directionalLight position={[3, 2, 1]} />*/}
                        {/*    <Cube />*/}
                        {/*</Canvas>*/}
                            <Canvas>
                                <Suspense>
                                <Stage>
                                    <OrbitControls enableZoom={false} autoRotate />
                                    {/*<Earth/>*/}
                                    <NewEarth/>
                                </Stage>
                                </Suspense>
                            </Canvas>
                        
                    </Left>
                    <Right>
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
                    </Right>
                </Container>
            </Section>
        )
    }
}
