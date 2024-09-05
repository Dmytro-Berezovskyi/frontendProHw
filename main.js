let stringNumber = "10269";
let realNumber = +stringNumber;

let fifthNumber = realNumber % 10;
let fourthNumber = Math.floor(realNumber / 10) % 10;
let thirdNumber = Math.floor((realNumber / 10) /10) % 10;
let secondNumber = Math.floor(((realNumber / 10) /10) /10) % 10;
let firstNumber = Math.floor((((realNumber /10) /10) /10) /10);

console.log(realNumber);
console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`);