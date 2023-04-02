import { Component } from "react";
import React from "react";
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

export default class CleanOceans extends Component {
    render() {
        return (
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets7.lottiefiles.com/private_files/lf30_qi37qiub.json"
                style={{ width: "100%" }}>
            </lottie-player>
        );
    }
}
