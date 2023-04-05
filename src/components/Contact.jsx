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
justify-content: space-between;
margin-top: 5rem;
`

const LeftSection = styled.div`
 flex: 2;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 20px;

`
const RightSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 2;
`
const DonateBox = styled.div`
display: flex;
background-color: green;
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
                        <p>
                            Donate to WWF
                            You can protect threatened species and their habitats today with a donation to World Wildlife Fund.
                            Your support of WWF's global conservation work will make a world of difference.

                            Your donation makes you a member of WWF. A gift of $1,000+ makes you a Partner in Conservation.
                        </p>
                        <DonateBox>
                        <DonateForm/>
                        </DonateBox>
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
