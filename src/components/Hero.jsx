import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background-color: rebeccapurple;
  color: black;
`
export default class Hero extends Component {
    render() {
        return (
            <Section>
            <div>Hero</div>
            </Section>
        )
    }
}
