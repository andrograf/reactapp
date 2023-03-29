import { Component } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import RecyclingBins from "./RecyclingBins";

export default class Recycling extends Component {
    render() {
        return (
            <Canvas>
                <Stage>
                    
                    
                    <RecyclingBins />
                    <OrbitControls enableZoom={false} autoRotate />
                </Stage>
            </Canvas>
        )
    }
}