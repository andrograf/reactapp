import styled from 'styled-components';
const hamburgerMenuStyle = styled.button`
position: absolute;
top: 1%;
left: 6%;
border: 5px solid var(--button-color, #fff);
border-radius: 1rem;
background: transparent;
--button-color: #fff;
&:hover {
    --button-color: #8fce00;
}
`
export { hamburgerMenuStyle };