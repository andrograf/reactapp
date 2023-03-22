import React, { Component } from 'react';
import styled from 'styled-components';

const datas = [
    "Plant Trees",
    "Recycling",
    "Clean Ocieans",
    "Save Wild Lifes",
    "Charitate"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const List = styled.ul`
list-style : none;
display: flex;
flex-direction: column;
gap: 20px;
`
const ListItem = styled.li`
font-size: 100px;
font-weigth: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;


    ::after{
        content: "${(props)=>props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

&:hover{
    ::after{
        animation: moveText 0.5s linear both;

        @keyframes moveText {
            to{
                width: 100%;
            }
        }
    }

}
`

const Right = styled.div`
flex: 1;
`

export default class Works extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Left>
                        <List>
                            {datas.map((data) => <ListItem key={data} text={data} >{data}</ListItem>)}
                        </List>
                    </Left>
                    <Right></Right>
                </Container>
            </Section>
        )
    }

}
