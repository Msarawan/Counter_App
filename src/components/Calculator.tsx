import React, { useState } from "react";
import { Button } from '@patternfly/react-core';

export const Calculator = () => {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [result, setResult] = useState<number | string>("");

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(Number(num1) + Number(num2));
    } else {
      setResult("");
    }
  };

  const handleSubtract = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(Number(num1) - Number(num2));
    } else {
      setResult("");
    }
  };

  const handleMultiply = () => {
    if (num1 !== "" && num2 !== "") {
      setResult(Number(num1) * Number(num2));
    } else {
      setResult("");
    }
  };

  const handleDivide = () => {
    if (num1 !== "" && num2 !== "") {
      if (Number(num2) === 0) {
        setResult("Cannot divide by zero");
      } else {
        setResult(Number(num1) / Number(num2));
      }
    } else {
      setResult("");
    }
  };

  const handleModulo = () => {
    if (num1 !== "" && num2 !== "") {
        setResult(Number(num1) % Number(num2));
      } else {
        setResult("");
      }
  };

  return (
    <div className="input-box">
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={handleNum1Change}
        className="input"
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={handleNum2Change}
      />

      <Button onClick={handleAdd} className="button">Addition</Button>
      <Button onClick={handleSubtract} className="button">Subtraction</Button>
      <Button onClick={handleMultiply} className="button">Multiplication</Button>
      <Button onClick={handleDivide} className="button">Division</Button>
      <Button onClick={handleModulo} className="button">Modulo</Button>


      <div className="result">
        {result !== "" && <p>Result: {result}</p>}
        {result === "" && <p>Result: </p>}
      </div>
    </div>
  );
};