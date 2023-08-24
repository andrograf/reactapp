import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: space-between;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
  display: flex;
justify-content: space-between;
`

const Right = styled.div`
 flex: 2;
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 20px;
 padding: 5% 0% 0% 0%;
 animation: fadeIn 5s;

 "@keyframes fadeIn {  0% { opacity: 0; }  100% { opacity: 1; }}"
`

const Left = styled.div`
flex: 3;
position: relative;
padding: 10% 0% 10% 0%;
`

const Title = styled.h1`
font-size: 75px;
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const Subtitle = styled.h2`
color: #ccfe65;
`

const Line = styled.img`
height: 5px;
padding: 10px 0;
`
const Description = styled.p`
font-size: 20px;
color: lightgray;
`

export {
    Section,
    Container,
    Title,
    WhatWeDo,
    Description,
    Subtitle,
    Line,
    Left,
    Right
};