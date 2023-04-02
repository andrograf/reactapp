import React, { Component } from "react";
import "@lottiefiles/lottie-player";


export default class PlantTrees extends Component {
    render() {
        
        return (
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets3.lottiefiles.com/private_files/lf30_q5pzdjc7.json"
                style={{ width: "100%" }}>     
            </lottie-player>
        );
    }
}
