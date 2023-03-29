import React, { Component, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import styled from 'styled-components';
//import { Earth } from './Earth';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
export default class Contact extends Component {
    render() {
        return (
            <Section>
                {/*<Canvas>*/}
                {/*    <Suspense fallback={null}>*/}
                {/*        <Earth/>*/}
                {/*    </Suspense>*/}
                {/*</Canvas>*/}
            </Section>
            
        )
    }

}
