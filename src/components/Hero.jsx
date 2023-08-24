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

export default class Hero extends Component {
    render() {
        return (
            <Section id="home">
                
                
                <Container>
                    <LeftSection>
                        <Title>
                            <Text1>
                                Think. Make.
                            </Text1>
                            <Text2>
                                Be Green.
                            </Text2>
                        </Title>
                        <WhatWeDo>
                            <Line src="./img/line.png"></Line>
                            <Subtitle>Help to make the world a better place</Subtitle>
                        </WhatWeDo>

                        <Description>
                               We aims at creating a holistic and ecological view of the world.<br></br>
                               We want to make the people conscious of stopping further<br />
                               degradation and deterioration of nature and its resources.
                        </Description>
                        <Button onClick={() => window.location.replace("/#introduction")}>Learn more</Button>
                    </LeftSection>


                    <RightSection>
                            <Canvas>
                                <OrbitControls enableZoom={false} autoRotate />
                                <ambientLight intersiti={3} />
                                <directionalLight position={[0, 1, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.2}>
                                <MeshDistortMaterial attach="material" distort={0.5} speed={2} color="#dbff8d"/>
                            </Sphere>
                            </Canvas>
                        <Img src="./img/greenGround.png"/>
                    </RightSection>
                </Container>
            </Section>
        )
    }
}
