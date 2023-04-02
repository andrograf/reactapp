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
export default class SaveWildLifes extends Component {
    render() {
        return (
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets10.lottiefiles.com/private_files/lf30_vwjw9biy.json"
                style={{ width: "100%" }}>
            </lottie-player>
        );
        
    }
}
