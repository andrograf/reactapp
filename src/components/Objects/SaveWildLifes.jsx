import { Component } from "react";
import React from "react";
import "@lottiefiles/lottie-player";
import styled from 'styled-components';

const Section = styled.div`
position: relative;
`
const Top = styled.div`
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
export default class SaveWildLifes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotti: {
                width: "100%",

            }
        }
    }


    render() {
        return (
            <Section>
                <Top>
                    <lottie-player
                    autoplay
                    loop
                    mode="normal"
                        src="https://assets10.lottiefiles.com/private_files/lf30_vwjw9biy.json"
                        style={this.state.lotti}>
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
