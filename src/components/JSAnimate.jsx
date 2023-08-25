import * as THREE from 'three';
import React, { Component } from 'react';

// create new scene, new perspective camera
const AnimGlobe = () => {
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
);

// create WebbGL renderer
const renderer = new THREE.WebGLRenderer();
// set renderer size
renderer.setSize(innerWidth, innerHeight);

// add renderer to document
document.body.appendChild(renderer.domElement);


//create a sphere (radius, width, height)
const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
        color: 0xFF0000
    }));

// add object to scene
scene.add(sphere);

// set camera position
camera.position.z = 10;

// render and animate object
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}

animate();

}