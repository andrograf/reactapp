import { Component } from "react";
import {
    Container,
    Button,
    Icon,
    Icons,
    Links,
    List,
    ListItem,
    Section,
} from '../styledComponents/StyleOfMenu';

const listItems = (
    <List>
        <ListItem onClick={() => window.location.replace("/#home")} aria-label="Home">Home</ListItem>
        <ListItem onClick={() => window.location.replace("/#introduction")} aria-label="Introduction">Introduction</ListItem>
        <ListItem onClick={() => window.location.replace("/#about_us")} aria-label="About Us">About Us</ListItem>
        <ListItem onClick={() => window.location.replace("/#contact")} aria-label="Contact">Contact</ListItem>
    </List>);

export let clicked = false;

export function setClicked(isClicked) {
    clicked = isClicked;
}

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section>

                <Container>
                    {(clicked) ?
                        (<Links style={{ transition: "300ms ease-in 300ms", opacity:100, }}>
                            {listItems}
                        </Links>) :
                        (<Links style={{ transition: "300ms ease-in 300}ms", opacity:0 }}>
                            {listItems}
                        </Links>)
                    }

                    <Icons>
                        <Icon src="./img/search.png" />
                        <Button onClick={() => window.location.replace("/#contact")} aria-label="Donate">Donate</Button>
                    </Icons>

                </Container>
            </Section>);
    }
}

