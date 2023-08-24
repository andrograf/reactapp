import { Component } from "react";
import "@lottiefiles/lottie-player";
import styled from 'styled-components';

const Section = styled.div`
position: relative;
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
width: 450px;
font-size: 20px;
margin: 15px 0;
color: lightgray;
padding: 5% 10% 0 10%;
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
                        style={{ width: "75%" }}
                        alt="animation">
                    </lottie-player>
                </Top>
                <Bottom>
                    <Description>
                        Recycling reduces the need to grow, harvest or extract new raw materials from the Earth.
                        That in turn lessens the harmful disruption and damage being done to the natural world:
                        fewer forests cut down, rivers diverted, wild animals harmed or displaced, and less pollution of water, soil and air.
                        And of course if our plastic waste isn't safely put in the recycling,
                        it can be blown or washed into rivers and seas and end up hundreds or thousands of miles away,
                        polluting coastlines and waterways and becoming a problem for everyone.
                    </Description>
                </Bottom>
            </Section>
        )
    }
}


