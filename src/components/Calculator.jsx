import React, { useState } from 'react'
import Container from './Container'
import Result from './Result';
import './Calculator.css';

function Calculator() {
    const [numbers, setNumbers] = useState({
        num1: 0,
        num2: 0,
        op: '+'
    });
    const [result, setResult] = useState();
    const handleChangeNumber = (event) => {
        const { name, value } = event.target
        setNumbers((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    const calculate = () => {
        switch(numbers.op) {
            case "/":
                setResult(Number(numbers.num1) / Number(numbers.num2));
            break;
            case "*":
                setResult(Number(numbers.num1) * Number(numbers.num2));
            break;
            case "-":
                setResult(Number(numbers.num1) - Number(numbers.num2));
            break;
            case "+":
                setResult(Number(numbers.num1) + Number(numbers.num2));
            break;
            default:
                setResult("Não calculável!")
        }
    };
  return (
    <Container>
        <label htmlFor="num1">
            <input type="number" onChange={handleChangeNumber} name="num1" value={numbers.num1} id="num1" />
        </label>
        <label htmlFor="num2">
            <input type="number" onChange={handleChangeNumber} name="num2" value={numbers.num2} id="num2" />
        </label>
        <select name='op' onChange={handleChangeNumber}>
            <option value="*">X</option>
            <option value="/">/</option>
            <option value="+">+</option>
            <option value="-">-</option>
        </select>
        <button onClick={calculate}>
            Calcular
        </button>
            {
                result && <Result result={result} />
            }
    </Container>
  )
}

export default Calculator