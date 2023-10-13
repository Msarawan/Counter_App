import {Add,Subtract,Multiply,Division,Modulo} from './BasicCalculator';

describe('Calculator test', () => {
    it('should return addition of two numbers', () => {
     const response = Add(2,2);
     const result=4;
     expect(response).toBe(result);
    })

    it('should return subtraction of two numbers', () => {
        const response = Subtract(10,2);
        expect(response).toBe(8);
    })

    it('should return Multiplication of two numbers', () => {
        const response = Multiply(20,2);
        expect(response).toBe(40);
    })

    it('should return Division of two numbers', () => {
        const response = Division(10,5);
        expect(response).toBe(2);
    })

    it('should return Module of two numbers', () => {
        const response = Modulo(10,2);
        const result=0;
        expect(response).toBe(result);
    })
})
