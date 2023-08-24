import styled from 'styled-components';

const Section = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Description = styled.p`
width: 450px;
object-fit: contain;
font-size: 20px;
color: lightgray;
`

export {
    Section,
    Top,
    Bottom,
    Description
};