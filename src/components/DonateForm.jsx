import { useState } from 'react';
import styled from 'styled-components';

export default function DonateForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    const Section = styled.div`
    display: flex;
 align-items: center;
 flex-direction: column;
 gap: 20px;
    `
    const ChooseAmountSection = styled.div`
    display: flex;
 align-items: start;
 flex-direction: column;
 gap: 20px;
    `
    const SubmitSection = styled.div`
    display: flex;
 align-items: center;
 flex-direction: column;
    `
    const Container = styled.div`
    display: flex;
 align-items: center;
 gap: 5px;
    `
    const Label = styled.label`
    border-radius: 2px;
    color: #175f3f;
    font-weight: 600;
    padding: 15px 25px;
    background-color: white;
    &:hover{
        background-color: #8fce00;
    }
    `
    const Input = styled.input`
    ::placeholder {
        color: white
    }
    background-color: transparent;
    outline: 0!important;
    border: 0px;
    padding: 15px 25px;
    cursor: text;
    `
    return (
        <>
            <Section>
                <ChooseAmountSection>
                    <h1>DONATE</h1>
                    <Container>
                        <Label for="euro">EUR
                            <input name="currency" type='radio' id='eur' value="EUR" required style={{ opacity: 0,} } />
                        </Label>
                        <Label for="usd">USD
                            <input name="currency" type='radio' id='usd' value="USD" required style={{ opacity: 0, }} />
                        </Label>
                    </Container>
                    <Container>
                        <Label for="usd">25
                            <input name="amount" type='radio' id='usd' value="25" required style={{ opacity: 0, }} />
                        </Label>
                        <Label for="usd">50
                            <input name="amount" type='radio' id='usd' value="50" required style={{ opacity: 0, }} />
                        </Label>
                        <Label for="usd">100
                            <input name="amount" type='radio' id='usd' value="100" required style={{ opacity: 0, }} />
                        </Label>
                        <Container style={{ border: '2px solid #bedae9', padding: '1px 10px',borderRadius: '2px', }}>
                        <span>EUR</span>
                            <Input type="number" placeholder="type amount..." min={1} />
                        </Container>
                    </Container>
                </ChooseAmountSection>

                <SubmitSection>
                    <button>DONATE</button>
                    <h5>By donating, you agree to the terms and conditions.</h5>
                    <img src="./img/paymentLogos.png" width="50%" height="100%"/>
                </SubmitSection>
            </Section>
        </>
    )
}

