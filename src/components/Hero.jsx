import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import {
    Section,
    Container,
    LeftSection,
    RightSection,
    Title,
    WhatWeDo,
    Button,
    Description,
    Subtitle,
    Line,
    Img,
    Text1,
    Text2
} from '../styledComponents/StyleOfHero.jsx';

const titlePartOne = "Think. Make.";
const titlePartTwo = "Be Green.";
const subtitle = "Help to make the world a better place";
const description = `We aims at creating a holistic and ecological view of the world.\n
                               We want to make the people conscious of stopping further \n
    degradation and deterioration of nature and its resources.`;
const buttonText = "Learn more";
export default class Hero extends Component {
    render() {
        return (
            <Section id="home">
                
                
                <Container>
                    <LeftSection>
                        <Title>
                            <Text1>
                                { titlePartOne }
                            </Text1>
                            <Text2>
                                { titlePartTwo }
                            </Text2>
                        </Title>
                        <WhatWeDo>
                            <Line src="./img/line.png" aria-label="hyphen"></Line>
                            <Subtitle>{ subtitle }</Subtitle>
                        </WhatWeDo>

                        <Description>
                            { description }
                        </Description>
                        <Button onClick={() => window.location.replace("/#introduction")}>{ buttonText }</Button>
                    </LeftSection>


                    <RightSection>
                            <Canvas aria-label="Green city illustration">
                                <OrbitControls enableZoom={false} autoRotate />
                                <ambientLight intersiti={3} />
                                <directionalLight position={[0, 1, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.2}>
                                <MeshDistortMaterial attach="material" distort={0.5} speed={2} color="#dbff8d"/>
                            </Sphere>
                            </Canvas>
                        <Img src="./img/greenGround.png" alt="Green city illustration"/>
                    </RightSection>
                </Container>
            </Section>
        )
    }
}
