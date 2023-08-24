import { Component } from "react";
import React from "react";
import {
    Section,
    Top,
    Bottom,
    Description
} from '../../styledComponents/StyleOfCleanOceans';

export default class CleanOceans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotti: {
                width: "85%",
                

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
                src="https://assets4.lottiefiles.com/packages/lf20_OFvr8Nvcmq.json"
                style={this.state.lotti}
                alt="animation">
                    </lottie-player>
                </Top>
                <Bottom>
                    <Description>
                        Every year, millions of tons of plastic enter the oceans, of which the majority spills out from rivers.
                        A portion of this plastic travels to ocean garbage patches,
                        where it gets caught in a vortex of circulating currents alongside plastic from other sources
                        (e.g. offshore fishing activities). If no action is taken,
                        plastic will increasingly impact our ecosystems, health, and economies.
                    </Description>
                </Bottom>
            </Section>
        );
    }
}
