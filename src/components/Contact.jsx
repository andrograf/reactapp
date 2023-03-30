import React, { Component, Suspense } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Text = styled.div.attrs(props => ({
    className: props.className,
}))`
--animation-delay: var(--delay, 0);
  --animation-duration: var(--duration, 800ms);
  --animation-iterations: var(--iterations, 1);
  position: relative;
  font-size: 10vw;
  animation-name: clip-text;
  color: #FFF;
  white-space: nowrap;
  cursor: default;
  
  &::after {
    content: "";
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f98b;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
    animation-name: text-revealer;
  }
  
}


@keyframes clip-text {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}


@keyframes text-revealer {
  
  0%, 50% {
    transform-origin: 0 50%;
  }
  
  60%, 100% {
    transform-origin: 100% 50%;   
  }

  
  60% {
    transform: scaleX(1);
  }
  
  100% {
    transform: scaleX(0);
  }
}

`

export default class Contact extends Component {
    render() {
        return (
            <Section>
                <marquee behavior="slide" direction="down">Order is active.</marquee>
            </Section>
            
        )
    }

}
