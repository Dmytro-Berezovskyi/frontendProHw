class Calculator {
    add (firstValue, secondValue) {
        return firstValue + secondValue;
    }
    subtract (firstValue, secondValue) {
        return firstValue - secondValue;
    }
    multiply (firstValue, secondValue) {
        return firstValue * secondValue;
    }
    divide (firstValue, secondValue) {
        return firstValue / secondValue;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));