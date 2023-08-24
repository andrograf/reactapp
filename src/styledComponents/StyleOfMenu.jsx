import styled from 'styled-components';

const Section = styled.div`
position: absolute;
top: 1%;
left: 6%;
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
display: "flex";
alignItems: "center";
gap: "50px";
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
    &:hover {
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
    }
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
    transition: 0.5s;
    &:hover {
        color: black;
        background-color: #dbff8d;
    }
`
export {
    Container,
    Button,
    Icon,
    Icons,
    Links,
    List,
    ListItem,
    Logo,
    Section,
};
