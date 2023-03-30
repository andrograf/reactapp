import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { MeshPhongMaterial, TextureLoader } from "three";
import EarthDayMap from "../assets/earth_daymap.jpg";
import EarthCloudsMap from "../assets/earth_clouds.jpg";
import EarthNormalMap from "../assets/earth_normal_map.jpg";
import EarthSpecularMap from "../assets/earth_specular_map.jpg";
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';


export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])
    return (
        <>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1.5} />
            <mesh>
                <sphereGeometry args={[2.58, 32, 32]} />
                <meshPhongMaterial
                    map={cloudMap}
                    opacity={0.4}
                    deptWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide} />
            </mesh>
            
        <mesh>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
        </mesh>
        </>
    );
}