import React, { Component, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Earth } from './Earth';
import {
    Section,
    Container,
    Title,
    WhatWeDo,
    Description,
    Subtitle,
    Line,
    Left,
    Right
} from '../styledComponents/StyleOfWho';


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
