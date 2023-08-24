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
const home = "Home";
const intro = "Introduction";
const about = "About Us";
const contact = "Contact";
const buttonText = "Donate";
const listItems = (
    <List>
        <ListItem onClick={() => window.location.replace("/#home")} aria-label="Home">{home}</ListItem>
        <ListItem onClick={() => window.location.replace("/#introduction")} aria-label="Introduction">{intro}</ListItem>
        <ListItem onClick={() => window.location.replace("/#about_us")} aria-label="About Us">{about}</ListItem>
        <ListItem onClick={() => window.location.replace("/#contact")} aria-label="Contact">{contact}</ListItem>
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
                        <Button onClick={() => window.location.replace("/#contact")} aria-label="Donate">{buttonText}</Button>
                    </Icons>

                </Container>
            </Section>);
    }
}

