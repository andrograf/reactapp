import React, { useRef } from 'react';
import styled from 'styled-components';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Text, RenderTexture, PerspectiveCamera } from '@react-three/drei';


const Cube = () => {
    const textRef = useRef();
    useFrame(state => textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2.9);
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0.4, 3]} />
                    <color attach="background" args={["#8fce00"]} />
                    <Text ref={textRef } fontSize={3} color="white">EARTH</Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )


}

export default Cube;