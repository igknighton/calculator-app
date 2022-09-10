import styled from 'styled-components'
import {createGlobalStyle} from "styled-components";
import {colors} from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors["veryDarkSaturatedBlue-background"]};
    font-size: 32px;
    color: ${colors["white-text"]};
  }
`

const borderRadius = '10px';

const Container = styled.div`
  max-width: 500px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const NumberInput = styled.div`
  margin-top: 10px;
  background: ${colors["veryDarkSaturatedBlue-screen-background"]};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: ${borderRadius};
`

const ButtonContainer = styled.div`
  margin-top: 10px;
  background: ${colors["veryDarkSaturatedBlue-toogle-keypad-background"]};
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 1rem;
  padding: 20px;
  border-radius: ${borderRadius};
`

const Button = styled.div`
  background: ${props => props.function ? colors["veryDarkSaturatedBlue-key-background"] :
          props.enter ? colors['red'] :
                  colors["lightGrayishOrange-key-background"]};
  color: ${props => (props.function || props.enter) ? colors["white-text"] : colors["darkGrayishBlue-text"]};
  text-align: center;
  border-radius: ${borderRadius};
  padding: 10px 10px;
`

const BigButton = styled(Button)`
    grid-column: span 2;
`


export {Container,GlobalStyle,Header,NumberInput,ButtonContainer,Button,BigButton}