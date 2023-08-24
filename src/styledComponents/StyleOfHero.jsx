import styled from 'styled-components';

const Section = styled.div`
margin-top: 5rem;
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
flex: 3;
position: relative;
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

const Button = styled.button`
 width: 100px;
 padding: 10px;
 background-color: #8fce00;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 font-weigth: 500;
 transition: .2s ease;

 &:hover{
    transform: scale(1.5,1.5);
}
 }
`

const Img = styled.img`
width: 450px;
object-fit: contain;
position: absolute;
pointer-events: none;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate{
    to{
        transform: translateY(40px);
    }

}
`

const Text1 = styled.p`
margin:0;
border-right: none;
white-space: nowrap;
overflow: hidden;

animation: animated-text 4s steps(29,end) 1s 1 normal both,
             animated-cursor 600ms steps(29,end) 9;


@keyframes animated-text{
  from{width: 0;}
  to{width: 475px;}
}

animation-delay: 2s;

@keyframes animated-cursor{
  from{
      border-right: solid 3px rgba(0,255,0,.75);}
  to{border-right: solid 3px transparent;}
}
`

const Text2 = styled.p`
margin: 0;
border-right: none;
  white-space: nowrap;
  overflow-wrap: break-word;
  overflow: hidden;

animation: animated-text2 4s steps(29,end) 1s 1 normal both,
             animated-cursor2 600ms steps(29,end) infinite;

animation-delay: 7.6s;

@keyframes animated-text2{
  from{width: 0;}
  to{width: 345px;}
}

@keyframes animated-cursor2{
  from{
      border-right: solid 3px rgba(0,255,0,.75);}
  to{border-right: solid 3px transparent;}
}

`
export {
    Section,
    Container,
    LeftSection,
    RightSection,
    Title,
    WhatWeDo,
    Button,
    Description,
    Subtitle,
    Line,
    Img,
    Text1,
    Text2
};