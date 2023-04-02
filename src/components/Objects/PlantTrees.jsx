import React, { Component } from "react";
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
font-size: 28px;
margin: 15px 0;
`
export default class PlantTrees extends Component {
    render() {
        
        return (
            <Section>
                <Top>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets3.lottiefiles.com/private_files/lf30_q5pzdjc7.json"
                style={{ width: "50%" }}>     
                    </lottie-player>
                </Top>
                <Bottom>
                    <Description>
                        Reforestation can improve human health by providing sustainable,
                        high quality supplies of food and water over time
                        - and by reducing the incidence and transmission of diseases. 
                    </Description>
                </Bottom>
            </Section>
        );
    }
}
