import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import {Calculator} from './Calculator';

describe('Calculator Component', () => {
  it(' should return addition of two numbers', () => {
    const comp = render(<Calculator />);
    const num1Input = comp.getByPlaceholderText('Enter number 1');
    const num2Input = comp.getByPlaceholderText('Enter number 2');
    const Button = comp.getByText('Addition');

    fireEvent.change(num1Input, { target: { value: '10' } });
    fireEvent.change(num2Input, { target: { value: '20' } });
    fireEvent.click(Button);

    const result = comp.getByText('Result: 30');
    expect(result).toBeInTheDocument();
  });

  it(' should return subtraction of two numbers', () => {
    const comp = render(<Calculator />);
    const num1Input = comp.getByPlaceholderText('Enter number 1');
    const num2Input = comp.getByPlaceholderText('Enter number 2');
    const Button = comp.getByText('Subtraction');

    fireEvent.change(num1Input, { target: { value: '20' } });
    fireEvent.change(num2Input, { target: { value: '10' } });
    fireEvent.click(Button);

    const result = comp.getByText('Result: 10');
    expect(result).toBeInTheDocument();
  });

  it(' should return multiplication of two numbers', () => {
    const comp = render(<Calculator />);
    const num1Input = comp.getByPlaceholderText('Enter number 1');
    const num2Input = comp.getByPlaceholderText('Enter number 2');
    const Button = comp.getByText('Multiplication');

    fireEvent.change(num1Input, { target: { value: '10' } });
    fireEvent.change(num2Input, { target: { value: '20' } });
    fireEvent.click(Button);

    const result = comp.getByText('Result: 200');
    expect(result).toBeInTheDocument();
  });

  it(' should return division of two numbers', () => {
    const comp = render(<Calculator />);
    const num1Input = comp.getByPlaceholderText('Enter number 1');
    const num2Input = comp.getByPlaceholderText('Enter number 2');
    const Button = comp.getByText('Division');

    fireEvent.change(num1Input, { target: { value: '20' } });
    fireEvent.change(num2Input, { target: { value: '10' } });
    fireEvent.click(Button);

    const result = comp.getByText('Result: 2');
    expect(result).toBeInTheDocument();
  });

  it(' should return modulo of two numbers', () => {
    const comp = render(<Calculator />);
    const num1Input = comp.getByPlaceholderText('Enter number 1');
    const num2Input = comp.getByPlaceholderText('Enter number 2');
    const Button = comp.getByText('Modulo');

    fireEvent.change(num1Input, { target: { value: '20' } });
    fireEvent.change(num2Input, { target: { value: '20' } });
    fireEvent.click(Button);

    const result = comp.getByText('Result: 0');
    expect(result).toBeInTheDocument();
  });
})