import { Component } from "react";
import React from "react";
import styled from 'styled-components';

const Section = styled.div`
`
const Top = styled.div`
`
const Bottom = styled.div`
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
