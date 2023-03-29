import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import EarthDayMap from "../assets/earth_daymap.jpg";
import EarthCloudsMap from "../assets/earth_daymap.jpg";
import EarthNormalMap from "../assets/earth_daymap.jpg";
import EarthSpecularMap from "../assets/earth_daymap.jpg";
import { OrbitControls,MeshDistortMaterial } from '@react-three/drei';


export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])
    return (
        <>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1.5} />
           
            
        <mesh>
                <sphereGeometry args={[3, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} cloudMap={cloudMap} />
        </mesh>
        </>
    );
}