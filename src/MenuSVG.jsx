import { Component } from "react";
import styled from 'styled-components';


const Button = styled.button`
margin-left: 10px;
border: 10px solid var(--button-color, #fff);
border-radius: 1rem;
background: transparent;
--button-color: #fff;
&:hover {
    --button-color: #8fce00;
}
`
const LineOne = styled.rect`
transition: 
    y 300ms ease-in 300ms,
    rotate 300ms ease-in,
    opacity 0ms 300ms;
&:hover {
    transition: 
        y 300ms ease-in,
        rotate 300ms ease-in 300ms,
        opacity 0ms 300ms;
}
transform-origin: center;

`

const LineTwo = styled.rect`
transition: 
    y 300ms ease-in 300ms,
    rotate 300ms ease-in,
    opacity 0ms 300ms;
&:hover {
    transition: 
        y 300ms ease-in,
        rotate 300ms ease-in 300ms,
        opacity 0ms 300ms;
}
`

const LineThree = styled.rect`
transition: 
    y 300ms ease-in 300ms,
    rotate 300ms ease-in,
    opacity 0ms 300ms;
&:hover {
    transition: 
        y 300ms ease-in,
        rotate 300ms ease-in 300ms,
        opacity 0ms 300ms;
}
transform-origin: center;
`

export default class MenuButton extends Component {
    constructor() {
        super();
        this.state = {
            buttonArea: {
                areaExpended: "false"
            },
            lineOnePos: {
                x: 10,
                y: 25,
            },
            lineOneStyle: {
                rotate: '0deg',
            },

            lineTwoPos: {
                x: 10,
                y: 45,
            },
            lineTwoStyle: {
                rotate: '0deg',
                opacity: '100',
            },

            lineThreePos: {
                x: 10,
                y: 65,
            },
            lineThreeStyle: {
                rotate: '0deg',
            },
        }
    }

    hoverEvent() {
        this.setState({
            lineOnePos: {
                ...this.state.lineOnePos,
                y: 45,
            },
            lineOneStyle: {
                ...this.state.lineOneStyle,
                rotate: '45deg',
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
            },
        });
    }

    resetState() {
        this.setState({
            lineOnePos: {
                ...this.state.lineOnePos,
                y: 25,
            },
            lineOneStyle: {
                ...this.state.lineOneStyle,
                rotate: '0deg',
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
            }
        });
    }

    render() {
        return (
            <Button area-expended={this.state.buttonArea.areaExpended} onMouseEnter={() => this.hoverEvent()} onMouseLeave={()=> this.resetState()}>
                <svg fill="var(--button-color)" viewBox="0 0 100 100" width="250">

                    <LineOne style={this.state.lineOneStyle} width="80" height="10" x={this.state.lineOnePos.x} y={this.state.lineOnePos.y} rx="5" />

                    <LineTwo style={this.state.lineTwoStyle} width="80" height="10" x={this.state.lineTwoPos.x} y={this.state.lineTwoPos.y} rx="5" />

                    <LineThree style={this.state.lineThreeStyle} width="80" height="10" x={this.state.lineThreePos.x} y={this.state.lineThreePos.y} rx="5" />

                </svg>
            </Button>
        );
    }
}