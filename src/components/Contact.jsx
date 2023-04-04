import React, { Component, Suspense } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Recharts from './ReactChart';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
  display: flex;
justify-content: space-between;
margin-top: 5rem;
`

const LeftSection = styled.div`
 flex: 2;
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 20px;

`
const RightSection = styled.div`
flex: 2;
position: relative;
`


export default class Contact extends Component {
    render() {
        return (
            <Section id="contact">
                <Container>
                    <LeftSection>
                    </LeftSection>

                    <RightSection>
                        <Recharts/>
                    </RightSection>
                </Container>
            </Section>
            
        )
    }

}
                //<ButtonOne area-expended="false">
                //    <svg fill="var(--button-color)" viewBox="0 0 100 100" width="250">
                //        <Line width="80" height="10" x="10" y="25" rx="5"/>
                //        <Line width="80" height="10" x="10" y="45" rx="5"/>
                //        <Line width="80" height="10" x="10" y="65" rx="5"/>
                //    </svg>
                //</ButtonOne>
                //<marquee behavior="slide" direction="down">Order is active.</marquee>
