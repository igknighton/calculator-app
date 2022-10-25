import './App.css';
import {
    Container,
    GlobalStyle,
    Header,
    NumberInput,
    ButtonContainer,
    Button,
    BigButton,
    ButtonShadow,
    ToggleContainer,
    ToggleSwitch,
    TogglerContainer,
    TogglerLabel
} from "./styles/styles";
import {ThemeProvider} from "styled-components";
import {useState} from "react";
import {themes} from "./styles/colors";

function App() {

    const [themeOption,setThemeOption] = useState(1);
    const [numberInput,setNumberInput] = useState('');
    const [num1,setNum1] = useState(0);
    const [operator,setOperator] = useState('');

    const clearNumberState = () => {
        setNum1(0);
        setNumberInput('');
        setOperator('');
    }

    const handleOperator = operator => {
        setOperator(operator);
        setNum1(parseFloat(numberInput));
        setNumberInput('')
    }

    const handleCalculation = calculation => {
        setNumberInput(calculation)
        setOperator('=')
    }

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(numberInput)
        switch (operator) {
            case '+':
                handleCalculation(`${n1+n2}`);
                break;
            case '-':
                handleCalculation(`${n1-n2}`);
                break;
            case '*':
                handleCalculation(`${n1*n2}`);
                break;
            case '/':
                handleCalculation(`${n1/n2}`);
                break;
            case '':
                break;
            default:
                throw new Error('Unknown Operator')
        }
    }

    const handleToggle = () => {
        if (themeOption === 3) setThemeOption(1)
        else setThemeOption(themeOption+1)
    }

    const handleCalcInput = number => {
        if (operator === '=') {
            setNum1(0);
            setOperator('');
            setNumberInput(number);
        }
        else {
            setNumberInput(numberInput.concat(number))
        }
    }

    const deleteNumber = () => setNumberInput(numberInput.slice(0,-1))

    const ThemeToggler = () => {
        return <TogglerContainer>
            <TogglerLabel>Theme</TogglerLabel>
            <ToggleContainer onClick={handleToggle}  option={themeOption}>
                <ToggleSwitch/>
            </ToggleContainer>
        </TogglerContainer>
    }

    const CalculatorInput = () => {
        return <NumberInput>
            <div>{operator}</div>
            {numberInput}
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

            <FullButton onClick={() => handleCalcInput('7')}>7</FullButton>
            <FullButton onClick={() => handleCalcInput('8')}>8</FullButton>
            <FullButton onClick={() => handleCalcInput('9')}>9</FullButton>
            <FullButton onClick={deleteNumber} operation>DEL</FullButton>

            <FullButton onClick={() => handleCalcInput('4')}>4</FullButton>
            <FullButton onClick={() => handleCalcInput('5')}>5</FullButton>
            <FullButton onClick={() => handleCalcInput('6')}>6</FullButton>
            <FullButton onClick={() => handleOperator('+')}>+</FullButton>

            <FullButton onClick={() => handleCalcInput('1')}>1</FullButton>
            <FullButton onClick={() => handleCalcInput('2')}>2</FullButton>
            <FullButton onClick={() => handleCalcInput('3')}>3</FullButton>
            <FullButton onClick={() => handleOperator('-')} >-</FullButton>

            <FullButton onClick={() => handleCalcInput('.')}>.</FullButton>
            <FullButton onClick={() => handleCalcInput('0')}>0</FullButton>
            <FullButton onClick={() => handleOperator('/')}>/</FullButton>
            <FullButton onClick={() => handleOperator('*')}>X</FullButton>

            <FullButton size={'lg'} onClick={clearNumberState} operation>RESET</FullButton>
            <FullButton size={'lg'} onClick={calculate} eq>=</FullButton>
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
