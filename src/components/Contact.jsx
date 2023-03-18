import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background-color: yellow;
`
export default class Contact extends Component {
    render() {
        return (
            <Section>
                <div>Contact</div>
            </Section>
            
        )
    }

}
