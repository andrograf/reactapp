import styled from 'styled-components';

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
font-size: 80px;
font-weigth: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;


    ::after{
        content: "${(props) => props.text}";
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
`

export {
    Container,
    datas,
    Frame,
    Left,
    List,
    ListItem,
    Right,
    Section,
};