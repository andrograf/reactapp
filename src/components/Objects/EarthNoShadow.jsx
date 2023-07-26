/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 EarthNoShadow.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function EarthTwo(props) {
  const { nodes, materials } = useGLTF('/EarthNoShadow-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} scale={1.13} />
    </group>
  )
}

useGLTF.preload('/EarthNoShadow-transformed.glb')
