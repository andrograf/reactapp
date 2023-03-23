import { Component } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Tree from './Tree';
import NTree from './Ntree';


export default class PlantTrees extends Component {
    render() {
        
        return (
            <Canvas>
                <Stage>
                    <ambientLight intensity={15.0} />
                    <directionalLight position={[3, 3, 3]} />
                    <NTree />
                    <OrbitControls enableZoom={false} autoRotate />
                </Stage>
            </Canvas>
        );
    }
}