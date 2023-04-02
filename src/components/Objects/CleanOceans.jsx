import { Component } from "react";
import React from "react";
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
