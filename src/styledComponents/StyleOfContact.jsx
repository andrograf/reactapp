import styled from 'styled-components';

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

export {
    Section,
    Container,
    DonateBox,
    LeftSection,
    RightSection,
};