import './App.css';
import {Container, GlobalStyle, Header, NumberInput,ButtonContainer,Button,BigButton} from "./styles/styles";
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

    const CalculatorKeys = () => {

        return <ButtonContainer>

            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button operation>DEL</Button>

            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>+</Button>

            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>-</Button>

            <Button>.</Button>
            <Button>0</Button>
            <Button>/</Button>
            <Button>X</Button>

            <BigButton operation>RESET</BigButton>
            <BigButton eq>=</BigButton>
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
