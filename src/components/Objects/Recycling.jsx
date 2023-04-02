import { Component } from "react";
import "@lottiefiles/lottie-player";


export default class Recycling extends Component {
    render() {
        return (
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets4.lottiefiles.com/packages/lf20_AqzQPXeeU5.json"
                style={{ width: "100%" }}>
            </lottie-player>
        )
    }
}


