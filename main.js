let number = +prompt("Please enter an integer");
let count = 0;

while (!Number.isInteger(number)) {
    number = +prompt("It is not an integer. Please enter an integer");
};

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        count++;
    }
};

if (count <= 2) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
};