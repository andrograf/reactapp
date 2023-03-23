import React, { Component } from 'react';
import styled from 'styled-components';
import Charity from './Charity';
import CleanOceans from './CleanOceans';
import PlantTrees from './PlantTrees';
import Recycling from './Recycling';
import SaveWildLifes from './SaveWildLifes';

const datas = [
    "Plant Trees",
    "Recycling",
    "Clean Oceans",
    "Save Wild Lifes",
    "Charity"
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

const Frame = styled.div`


display: flex;
align-items: center;

`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
padding: 15% 0% 15% 0%;
`

export default class Works extends Component {
    constructor() {
        super();
        this.state = {
            work: "Plant Trees",
        }
    }

    clickEvent(data) {
        this.setState({ work: data });
        console.log(this.state.work);
    }
    render() {
        return (
            <Section>
                <Container>
                    <Left>
                        <List>
                            {datas.map((data) => <ListItem key={data} text={data} onClick={()=>this.clickEvent(data)} > {data}</ListItem>)}
                        </List>
                    </Left>
                    <Right>
                        {this.state.work === "Plant Trees" ? (<PlantTrees />) :
                            this.state.work === "Recycling" ? (<Recycling />) :
                                this.state.work === "Clean Oceans" ? (<CleanOceans />) :
                                    this.state.work === "Save Wild Lifes" ? (<SaveWildLifes />) :
                                        (<Charity/>)}
                        

                    </Right>
                </Container>
            </Section>
        )
    }

}
