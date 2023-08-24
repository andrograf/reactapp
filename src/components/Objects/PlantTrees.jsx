import React, { Component } from "react";
import "@lottiefiles/lottie-player";
import {
    Section,
    Top,
    Bottom,
    Description
} from '../../styledComponents/StyleOfPlantTrees';

const description = `Reforestation can improve human health by providing sustainable,
                        high quality supplies of food and water over time
                        - and by reducing the incidence and transmission of diseases. 
                        Addition to health benefits, forests provide traditional remedies
                        and key ingredients in 25% of all western medicines.
                        An added bonus is that spending time in or near them has been shown to significantly improve mental health.`;
export default class PlantTrees extends Component {
    render() {
        
        return (
            <Section>
                <Top>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets3.lottiefiles.com/private_files/lf30_q5pzdjc7.json"
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
