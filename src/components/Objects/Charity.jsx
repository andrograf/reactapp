import { Component } from "react";
import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Piggy from './PiggyBank';
import Cube from './Cube';

export default class Charity extends Component {
    render() {
        return (
        <Canvas camera={{ fov: 25, position: [3, 3, 3] }} >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intersiti={3} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
        </Canvas>
            //<Canvas>
            //    <Stage environment="city" intensity={0.6}>
            //        <Piggy/>
            //        <OrbitControls enableZoom={false} autoRotate />
            //    </Stage>
            //</Canvas>
        );
    }
}