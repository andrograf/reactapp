import { Component } from "react";
import styled from 'styled-components';


const Section = styled.div`
 display: flex;
 justify-content: center;
`

const Container = styled.div`
padding: 10px 0px;
 width:1400px;
 display: flex;
 justify-content: space-between;
`

const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 50px
`

const Icons = styled.div`
  display: flex;
 align-items: center;
 gap: 20px
`

const Icon = styled.img`
 width: 20px;
 cursor: pointer;
`

const List = styled.ul`
margin-left: 50px;
 display: flex;
 justify-content: space-between;
 gap: 20px;
 list-style: none;
`

const ListItem = styled.li`
 cursor: pointer;
`

const Logo = styled.img`
 height: 50px;
`

const Button = styled.button`
 width: 100px;
 padding: 10px;
 background-color: #8fce00;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
`


export default class Navbar extends Component {


    render() {
        return (
            <Section>

                <Container>
                    
                    <Links>
                        {/*<Logo src="./img/logo.png"></Logo>*/}
                        <List>
                            <ListItem onClick={() => window.location.replace("/#home")}>Home</ListItem>
                            <ListItem onClick={() => window.location.replace("/#introduction")}>Introduction</ListItem>
                            <ListItem onClick={() => window.location.replace("/#about_us")}>About Us</ListItem>
                            <ListItem onClick={() => window.location.replace("/#contact")}>Contact</ListItem>
                        </List>
                    </Links>

                    <Icons>
                        <Icon src="./img/search.png" />
                        <Button>Donate</Button>
                    </Icons>

                </Container>
            </Section>);
    }
}

