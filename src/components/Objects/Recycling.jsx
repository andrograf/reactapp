import { Component } from "react";
import "@lottiefiles/lottie-player";
import styled from 'styled-components';

const Section = styled.div`
`
const Top = styled.div`
`
const Bottom = styled.div`
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


