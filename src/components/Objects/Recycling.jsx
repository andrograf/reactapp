import { Component } from "react";
import "@lottiefiles/lottie-player";
import {
    Section,
    Top,
    Bottom,
    Description
} from '../../styledComponents/StyleOfRecycling';

const description = `Recycling reduces the need to grow, harvest or extract new raw materials from the Earth.
                        That in turn lessens the harmful disruption and damage being done to the natural world:
                        fewer forests cut down, rivers diverted, wild animals harmed or displaced, and less pollution of water, soil and air.
                        And of course if our plastic waste isn't safely put in the recycling,
                        it can be blown or washed into rivers and seas and end up hundreds or thousands of miles away,
                        polluting coastlines and waterways and becoming a problem for everyone.`;
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
                        { description }
                    </Description>
                </Bottom>
            </Section>
        )
    }
}


