import { Component } from "react";
import Beach from './Beach';
import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

export default class CleanOceans extends Component {
    render() {
        return (
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    
                    <Beach />
                    <OrbitControls enableZoom={false} autoRotate />
                </Stage>
            </Canvas>);
    }
}