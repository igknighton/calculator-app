import './App.css';
import {Container, GlobalStyle, Header, NumberInput,ButtonContainer,Button,BigButton,ButtonShadow} from "./styles/styles";
import {ThemeProvider} from "styled-components";
import {useState} from "react";
import {themes} from "./styles/colors";

function App() {

    const [themeOption,setThemeOption] = useState(1);

    const ThemeToggler = () => {
        return <div>
            <button onClick={() =>setThemeOption(1)}>1</button>
            <button onClick={() =>setThemeOption(2)}>2</button>
            <button onClick={() =>setThemeOption(3)}>3</button>
        </div>
    }

    const CalculatorInput = () => {

        return <NumberInput>
            123,456
        </NumberInput>
    }


    const FullButton = ({children,size='',...props}) => {

        return <ButtonShadow size={size} {...props}>
            {
                size === 'lg' ?
                    <BigButton {...props}>
                        {children}
                    </BigButton> :
                    <Button {...props}>
                        {children}
                    </Button>
            }
        </ButtonShadow>
    }

    const CalculatorKeys = () => {

        return <ButtonContainer>

            <FullButton>7</FullButton>
            <FullButton>8</FullButton>
            <FullButton>9</FullButton>
            <FullButton operation>DEL</FullButton>

            <FullButton>4</FullButton>
            <FullButton>5</FullButton>
            <FullButton>6</FullButton>
            <FullButton>+</FullButton>

            <FullButton>1</FullButton>
            <FullButton>2</FullButton>
            <FullButton>3</FullButton>
            <FullButton>-</FullButton>

            <FullButton>.</FullButton>
            <FullButton>0</FullButton>
            <FullButton>/</FullButton>
            <FullButton>X</FullButton>

            <FullButton size={'lg'} operation>RESET</FullButton>
            <FullButton size={'lg'} eq>=</FullButton>
        </ButtonContainer>
    }

  return (
      <ThemeProvider theme={themes[themeOption]}>
          <GlobalStyle/>
          <Container>
              <Header>
                  Calculator
                  <ThemeToggler/>
              </Header>
              <CalculatorInput/>
              <CalculatorKeys/>
          </Container>
      </ThemeProvider>
  );
}

export default App;
