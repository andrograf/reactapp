import { Component } from "react";
import React from "react";
import "@lottiefiles/lottie-player";
import styled from 'styled-components';

const Section = styled.div`
`
const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Description = styled.p`
font-size: 20px;
margin: 15px 0;
color: lightgray;
padding: 5% 10% 0 10%;
`
export default class Charity extends Component {
    render() {
        return (
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets7.lottiefiles.com/packages/lf20_6ejDeXulHz.json"
                style={{ width: "100%" }}>
            </lottie-player>

        );
    }
}
        //<Canvas camera={{ fov: 25, position: [3, 3, 3] }} >
        //    <OrbitControls enableZoom={false} autoRotate />
        //    <ambientLight intersiti={3} />
        //    <directionalLight position={[3, 2, 1]} />
        //    <Cube />
        //</Canvas>