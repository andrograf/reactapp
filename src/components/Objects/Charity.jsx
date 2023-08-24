import { Component } from "react";
import React from "react";
import "@lottiefiles/lottie-player";
import {
    Section,
    Top,
    Bottom,
    Description
} from '../../styledComponents/StyleOfCharity';

const description = `Why can't 3 billion people get the food they need? Poverty, conflict and inequality keep life-giving food out of reach.
                        When children don't have enough food, their brains and bodies suffer.
                        It stops them growing, learning and working. It locks them and their families in a life of poverty.
                        Left too long, hunger kills.
                        But we won't let it.
                        We're there in a crisis, getting life-saving food to people who need it. And we're there long after.`;
export default class Charity extends Component {
    render() {
        return (
            <Section>
                <Top>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets7.lottiefiles.com/packages/lf20_6ejDeXulHz.json"
                style={{ width: "75%" }}
                alt="animation">
            </lottie-player>
                </Top>
                <Bottom>
                    <Description>
                        {description}
                    </Description>
                </Bottom>
            </Section>
        );
    }
}
