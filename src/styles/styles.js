import styled from 'styled-components'
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundMain};
    font-size: 32px;
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
  color: ${props => props.theme.titleColor};
`

const NumberInput = styled.div`
  margin-top: 10px;
  background: ${props => props.theme.screenBackground};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: ${borderRadius};
  color: ${props => props.theme.titleColor};
`

const ButtonContainer = styled.div`
  margin-top: 10px;
  background: ${props => props.theme.keypadBackground};
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 1rem;
  padding: 20px;
  border-radius: ${borderRadius};
`

const Button = styled.div`
  background: ${props => props.operation ? props.theme.keys.operation.background :
          props.eq ? props.theme.keys.eq.background : 
          props.theme.keys.primary.background
};
  color: ${props => props.operation ? props.theme.keys.operation.textColor :
        props.eq ? props.theme.keys.eq.textColor :
        props.theme.keys.primary.textColor
  };
  text-align: center;
  border-radius: ${borderRadius};
  padding: 10px 10px;
  
  &:hover {
    background:${props=> props.operation ? props.theme.keys.operation.highlight :
                props.eq ? props.theme.keys.eq.highlight :
                props.theme.keys.primary.highlight};
    cursor: pointer;
  }
  
`

const BigButton = styled(Button)`
    grid-column: span 2;
`

const ButtonShadow = styled.div`
  background: ${props => props.operation ? props.theme.keys.operation.shadow :
        props.eq ? props.theme.keys.eq.shadow :
            props.theme.keys.primary.shadow
};
  padding-bottom: 5px;
  border-radius: ${borderRadius};
  grid-column: ${props => props.size === 'lg' ? 'span 2': 'span 1'};
`

export {Container,GlobalStyle,Header,NumberInput,ButtonContainer,Button,BigButton,ButtonShadow}