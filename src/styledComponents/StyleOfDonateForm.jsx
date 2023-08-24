import styled from 'styled-components';

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
    border: 2px solid #8fce00;
cursor: pointer;
    color: white;
    font-weight: 600;
    padding: 15px 25px;
    background-color: transparent;
    &:hover{
        background-color: rgba(143, 206, 0, 0.5);
    }
    `
const Input = styled.input`
    ::placeholder {
        color: white
    }
    background-color: transparent;
    outline: 0!important;
    border: 0px;
    padding: 17px 5px;
    cursor: text;
    `
const Button = styled.button`
    padding: 17px 41%;
    border-radius: 5px;
    border: 0;
    font-weight: 600;
    font-size: 16px;
cursor: pointer;
&:hover{
    background-color: lightgray;
}
`

export {
    Button,
    ChooseAmountSection,
    Container,
    Input,
    Label,
    Section,
    SubmitSection,
};