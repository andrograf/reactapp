import React, { Component, Suspense } from 'react';
import Recharts from './ReactChart';
import DonateForm from './DonateForm';
import {
    Section,
    Container,
    DonateBox,
    LeftSection,
    RightSection,
} from '../styledComponents/StyleOfContact';
const title = "Donate to SOW";
const description = "- You can protect threatened species, plans and support people in proverty today with a donation to Save Our World Fund.\nYour support of SOW's global conservation work will make a world of difference.";
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
                            <em>{ title }</em><br/>
                            { description }
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

