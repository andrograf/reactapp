import { useState } from 'react';
import {
    Button,
    ChooseAmountSection,
    Container,
    Input,
    Label,
    Section,
    SubmitSection,
} from '../styledComponents/StyleOfDonateForm';

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
    const buttonText = "DONATE";
    const description = "By donating, you agree to the terms and conditions.";
    function Click(event) {
        event.target.style = { backgroundColor: "#8fce00" }
    }

    return (
        <>
            <Section>
                <ChooseAmountSection>
                    <h1>DONATE</h1>
                    <Container>
                        <Label htmlFor="euro"
                            onClick={()=>{Click()}}
                            >EUR
                            <input name="currency" type='radio' id='eur' value="EUR" required style={{ opacity: 0,} } />
                        </Label>
                        <Label htmlFor="usd">USD
                            <input name="currency" type='radio' id='usd' value="USD" required style={{ opacity: 0, }} />
                        </Label>
                    </Container>
                    <Container>
                        <Label htmlFor="usd">25
                            <input name="amount" type='radio' id='usd' value="25" required style={{ opacity: 0, }} />
                        </Label>
                        <Label htmlFor="usd">50
                            <input name="amount" type='radio' id='usd' value="50" required style={{ opacity: 0, }} />
                        </Label>
                        <Label htmlFor="usd">100
                            <input name="amount" type='radio' id='usd' value="100" required style={{ opacity: 0, }} />
                        </Label>
                        <Container style={{ border: '2px solid #8fce00', padding: '1px 10px',borderRadius: '2px', }}>
                            <span style={{ fontWeight: 600,} }>EUR</span>
                            <Input type="number" placeholder="type amount..." min={1} />
                        </Container>
                    </Container>
                </ChooseAmountSection>

                <SubmitSection>
                    <Button type="submit">{buttonText}</Button>
                    <h5>{ description }</h5>
                    <img src="./img/paymentLogos.png" width="50%" height="100%" alt="payment types"/>
                </SubmitSection>
            </Section>
        </>
    )
}

