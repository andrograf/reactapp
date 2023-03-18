import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
export default class Hero extends Component {
    render() {
        return (
            <Section>
                <Navbar/>
            </Section>
        )
    }
}
