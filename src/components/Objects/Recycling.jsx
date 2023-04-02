import { Component } from "react";
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
color: lightgray;
font-weight: 200;
`
export default class Recycling extends Component {
    render() {
        return (
            <Section>
                <Top>
                    <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets4.lottiefiles.com/packages/lf20_AqzQPXeeU5.json"
                        style={{ width: "100%" }}>
                    </lottie-player>
                </Top>
                <Bottom>
                </Bottom>
            </Section>
        )
    }
}


