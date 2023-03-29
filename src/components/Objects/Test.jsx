import React, { Component } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, RenderTexture, PerspectiveCamera } from '@react-three/drei';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
    `

class Test extends Component {

    render() {
        return (
            <Container>
                <Canvas>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intersiti={3} />
                    <directionalLight position={[3, 2, 1] }/>
                    <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial>
                            <RenderTexture attach="map">
                                <PerspectiveCamera makeDefault position={[0, 0, 2] } />
                                <color attach="background" args={["#8fce00"]}/>
                                <Text fontSize={1} color="white">EARTH</Text>
                            </RenderTexture>
                        </meshStandardMaterial>
                    </mesh>
                </Canvas>
            </Container>
        )
    }

}

export default Test;