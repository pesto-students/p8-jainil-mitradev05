const mathOperations = require('./week6jest1.js')
const week6jest1 = require('./week6jest1.js')

describe('mathOperations', () => {
    test('sum adds two numbers', () => {
        expect(mathOperations.sum(1,2)).toBe(3);
        
    });

    test('diff subtracts two numbers', () => {
        expect(mathOperations.diff(10,5)).toBe(5);
    });

    test('product multiplies two numbers', () =>{
        expect(mathOperations.product(10,20)).toBe(200);
    });
});