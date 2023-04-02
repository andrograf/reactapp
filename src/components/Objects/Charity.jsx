import { Component } from "react";
import React from "react";
import "@lottiefiles/lottie-player";
import styled from 'styled-components';

const Section = styled.div`
position: relative;
`
const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;

`
const Description = styled.p`
width: 450px;
object-fit: contain;
font-size: 20px;
color: lightgray;
`
export default class Charity extends Component {
    render() {
        return (
            <Section>
                <Top>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets7.lottiefiles.com/packages/lf20_6ejDeXulHz.json"
                style={{ width: "75%" }}>
            </lottie-player>
                </Top>
                <Bottom>
                    <Description>
                        Reforestation can improve human health by providing sustainable,
                        high quality supplies of food and water over time
                        - and by reducing the incidence and transmission of diseases.
                        Addition to health benefits, forests provide traditional remedies
                        and key ingredients in 25% of all western medicines.
                        An added bonus is that spending time in or near them has been shown to significantly improve mental health.
                    </Description>
                </Bottom>
            </Section>
        );
    }
}
        //<Canvas camera={{ fov: 25, position: [3, 3, 3] }} >
        //    <OrbitControls enableZoom={false} autoRotate />
        //    <ambientLight intersiti={3} />
        //    <directionalLight position={[3, 2, 1]} />
        //    <Cube />
        //</Canvas>