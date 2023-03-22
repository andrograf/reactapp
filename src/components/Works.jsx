import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`

const Container = styled.div`
  height: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
flex: 1;
`
const List = styled.ul`

`
const ListItem = styled.li`

`

const Right = styled.div`
flex: 1;
`
export default class Works extends Component {
    render() {
        return (
            <Section>
            <div>Works</div>
            </Section>
        )
    }

}
