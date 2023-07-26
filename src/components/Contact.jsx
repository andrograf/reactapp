import React, { Component, Suspense } from 'react';
import styled from 'styled-components';
import Recharts from './ReactChart';
import DonateForm from './DonateForm';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
  display: flex;
justify-content: space-around;
margin-top: 5rem;
gap: 4rem;
`

const LeftSection = styled.div`
 flex: 2;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 20px;
margin-left: 6rem;

`
const RightSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 2;
`
const DonateBox = styled.div`
    margin-top:5rem;

display: flex;
background-color: #175f3f;
border-radius: 5px;
padding: 20px;
;
`

export default class Contact extends Component {
    render() {
        return (
            <Section id="contact">
                <Container>
                    <LeftSection>
                        <DonateBox>
                        <DonateForm/>
                        </DonateBox>
                        <p>
                            <em>Donate to SOW</em><br/>
                            - You can protect threatened species, plans and support people in proverty today with a donation to Save Our World Fund.
                            Your support of SOW's global conservation work will make a world of difference.
                        </p>
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
