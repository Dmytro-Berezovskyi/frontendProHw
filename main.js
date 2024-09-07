let askUser = prompt("Enter your number");
let usersAnswerNumber = +askUser;

let thirdNumber = usersAnswerNumber % 10;
let secondNumber = Math.floor((usersAnswerNumber % 100) /10);
let firstNumber = Math.floor(usersAnswerNumber / 100);

if (thirdNumber === secondNumber && secondNumber === firstNumber && thirdNumber === firstNumber) {
    console.log("All digits are the same");
} else {
    console.log("All digits are not the same")
}

if (thirdNumber === secondNumber || secondNumber === firstNumber || thirdNumber === firstNumber){
    console.log("Some digits are the same");
} else {
    console.log("None of the digits of the number are the same")
}

if (thirdNumber === secondNumber) {
    console.log("Third and Second digits are same")
} else if (secondNumber === firstNumber) {
    console.log("Second and First digits are same")
} else if (thirdNumber === firstNumber) {
    console.log("Third and First digits are same")
} else {
    console.log("None of the digits of the number are the same")
}
console.log(`${firstNumber} ${secondNumber} ${thirdNumber}`);