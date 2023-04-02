import { Component } from "react";
import styled from 'styled-components';


const Button = styled.button`
position: absolute;
top: 1%;
left: 6%;
border: 5px solid var(--button-color, #fff);
border-radius: 1rem;
background: transparent;
--button-color: #fff;
&:hover {
    --button-color: #8fce00;
}
`
const speed = 300;
const anim = `y ${speed}ms ease-in ${speed}ms,rotate ${speed}ms ease-in`;
const animHover = `y ${speed}ms ease-in,rotate ${speed}ms ease-in ${speed}ms`;

const Line = styled.rect`
`;

export default class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonArea: {
                areaExpended: false,
            },
            lineOnePos: {
                x: 10,
                y: 25,
            },
            lineOneStyle: {
                rotate: '0deg',
                transition: anim,
                transformOrigin: 'center',
            },

            lineTwoPos: {
                x: 10,
                y: 45,
            },
            lineTwoStyle: {
                rotate: '0deg',
                opacity: '100',
                transition: '0ms 300ms'
            },

            lineThreePos: {
                x: 10,
                y: 65,
            },
            lineThreeStyle: {
                rotate: '0deg',
                transition: anim,
                transformOrigin: 'center',
            },
        }
    }

    clickEvent() {
        console.log(this.state.buttonArea.areaExpended);
        if (this.state.buttonArea.areaExpended) {
            this.resetState();
        }
        else {
            this.setState({
                buttonArea: {
                    ...this.state.buttonArea,
                    areaExpended: true,
                },
                lineOnePos: {
                    ...this.state.lineOnePos,
                    y: 45,
                },
                lineOneStyle: {
                    ...this.state.lineOneStyle,
                    rotate: '45deg',
                    transition: animHover,
                },
                lineTwoStyle: {
                    ...this.state.lineTwoStyle,
                    opacity: 0,
                },
                lineThreePos: {
                    ...this.state.lineThreePos,
                    y: 45
                },
                lineThreeStyle: {
                    ...this.state.lineThreeStyle,
                    rotate: '-45deg',
                    transition: animHover,
                },
            });
        }
    }

    resetState() {
        this.setState({
            buttonArea: {
                ...this.state.buttonArea,
                areaExpended: false,
            },
            lineOnePos: {
                ...this.state.lineOnePos,
                y: 25,
            },
            lineOneStyle: {
                ...this.state.lineOneStyle,
                rotate: '0deg',
                transition: anim
            },
            lineTwoStyle: {
                ...this.state.lineTwoStyle,
                opacity: '100',
            },
            lineThreePos: {
                ...this.state.lineThreePos,
                y: 65
            },
            lineThreeStyle: {
                ...this.state.lineThreeStyle,
                rotate: '0deg',
                transition: anim
            }
        });
    }

    render() {
        return (
            <Button area-expended={this.state.buttonArea.areaExpended} onClick={() => this.clickEvent()}>
                <svg fill="white" viewBox="0 0 100 100" width="50">

                    <Line style={this.state.lineOneStyle} width="80" height="10" x={this.state.lineOnePos.x} y={this.state.lineOnePos.y} rx="5" />

                    <Line style={this.state.lineTwoStyle} width="80" height="10" x={this.state.lineTwoPos.x} y={this.state.lineTwoPos.y} rx="5" />

                    <Line style={this.state.lineThreeStyle} width="80" height="10" x={this.state.lineThreePos.x} y={this.state.lineThreePos.y} rx="5" />

                </svg>
            </Button>
        );
    }
}