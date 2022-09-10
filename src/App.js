import './App.css';
import {Container, GlobalStyle, Header, NumberInput,ButtonContainer,Button,BigButton} from "./styles/styles";

function App() {


    const ThemeToggler = () => {
        return <div>
            Theme Toggler
        </div>
    }

    const CalculatorInput = () => {

        const symbol = '%'
        return <NumberInput>
            123,456
        </NumberInput>
    }

    const CalculatorKeys = () => {

        return <ButtonContainer>

            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button function>DEL</Button>

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

            <BigButton function>RESET</BigButton>
            <BigButton enter>=</BigButton>
        </ButtonContainer>
    }

  return (
      <>
          <GlobalStyle/>
          <Container>
              <Header>
                  Calc
                  <ThemeToggler/>
              </Header>
              <CalculatorInput/>
              <CalculatorKeys/>
          </Container>
      </>
  );
}

export default App;
