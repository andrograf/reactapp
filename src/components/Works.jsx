import React, { Component } from 'react';
import Charity from './Objects/Charity';
import CleanOceans from './Objects/CleanOceans';
import PlantTrees from './Objects/PlantTrees';
import Recycling from './Objects/Recycling';
import SaveWildLifes from './Objects/SaveWildLifes';
import {
    Container,
    datas,
    Left,
    List,
    ListItem,
    Right,
    Section,
} from '../styledComponents/StyleOfWorks';


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
            <Section id="about_us">
                <Container>
                    <Left>
                        <List>
                            {datas.map((data) => (<ListItem
                                key={data}
                                text={data}
                                onClick={() => this.clickEvent(data)}
                                aria-label={data}> {data}</ListItem>))}
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
