import { Component } from "react";
import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Elephant from "./Elephant";

export default class SaveWildLifes extends Component {
    render() {
        return (
            <Canvas>
                <Stage>
                    <Elephant/>
                   
                    <OrbitControls enableZoom={false} autoRotate />
                </Stage>
            </Canvas>);
        
    }
}