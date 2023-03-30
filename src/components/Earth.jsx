import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import EarthDayMap from "../assets/earth_daymap.jpg";
import EarthCloudsMap from "../assets/earth_clouds.jpg";
import EarthNormalMap from "../assets/earth_normal_map.jpg";
import EarthSpecularMap from "../assets/earth_specular_map.jpg";
import { OrbitControls } from '@react-three/drei';


export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])
    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 7;
        cloudsRef.current.rotation.y = elapsedTime / 12;

    });

    return (
        <>
            <ambientLight intensity={3.5 } />
            <pointLight color="#f6f3ea" position={[4, 1, 7]} intensity={2.7} />
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[2.85, 32, 32]} />
                <meshPhongMaterial
                    map={cloudMap}
                    opacity={0.4}
                    deptWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide} />
            </mesh>

            <mesh ref={earthRef}>
                    <sphereGeometry args={[2.8, 32, 32]} />
                    <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.8}
                    roughness={0.7 }
                />
                <OrbitControls enableZoom={false } />  
            </mesh>
        </>
    );
}