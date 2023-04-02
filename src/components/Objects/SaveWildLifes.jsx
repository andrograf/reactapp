import { Component } from "react";
import React from "react";
import "@lottiefiles/lottie-player";

export default class SaveWildLifes extends Component {
    render() {
        return (
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets10.lottiefiles.com/private_files/lf30_vwjw9biy.json"
                style={{ width: "100%" }}>
            </lottie-player>
        );
        
    }
}
