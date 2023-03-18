import React, { Component } from 'react';
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import styled, { createGlobalStyle } from 'styled-components';


const Container = styled.div`
    height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
    }

    static renderPageSections() {
        return (
            <Container>
                <Hero/>
                <Who/>
                <Works/>
                <Contact/>
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
