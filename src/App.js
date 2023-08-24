import React, { Component } from 'react';
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import MenuButton from './components/MenuSVGButton';
import { Container as containerStyle } from './styledComponents/StyleOfApp';


const Container = containerStyle;

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
    }

    static renderPageSections() {
        return (
            <Container>
                <MenuButton />
                <Hero/>
                <Who/>
                <Works/>
                <Contact />
            </Container>
        );
    }

    render() {
        return (
            <div>
                {App.renderPageSections()}
            </div>
        );
    }

}
