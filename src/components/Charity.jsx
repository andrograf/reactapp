import { Component } from "react";
import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Piggy from './Piggy';

export default class Charity extends Component {
    render() {
        return (
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Piggy/>
                    <OrbitControls enableZoom={false} autoRotate />
                </Stage>
            </Canvas>
        );
    }
}