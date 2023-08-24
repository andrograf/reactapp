import { Component } from "react";
import React from "react";
import "@lottiefiles/lottie-player";
import {
    Section,
    Top,
    Bottom,
    Description
} from '../../styledComponents/StyleOfSaveWildLifes';

/*const Section = styled.div`
position: relative;
`
const Top = styled.div`
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
`*/
export default class SaveWildLifes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotti: {
                width: "100%",

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
                    src="https://assets10.lottiefiles.com/private_files/lf30_vwjw9biy.json"
                    style={this.state.lotti}
                    alt="animation">
                        </lottie-player>
                </Top>
                <Bottom>
                    <Description>
                        We protect wildlife for many reasons. It is a source of inspiration.
                        It nurtures a sense of wonder. It is integral to the balance of nature.
                        In our work, we focuse on saving populations of the most ecologically,
                        economically and culturally important species in the wild. Ultimately, by protecting species,
                        we save this beautiful, vulnerable and utterly irreplaceable planet we call home.
                    </Description>
                </Bottom>
            </Section>
        );
        
    }
}
