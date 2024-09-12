let number = +prompt("Please enter an integer");
let count = 0;

for (let i = 1; i <= number; i++) {
    switch (true) {
        case !Number.isInteger(number):
            number = prompt("It is not an integer. Please enter an integer");
            break;
        case number % i === 0:
            count++;
            break;
    };
};

if (count <= 2) {
    console.log("is a prime number");
} else {
    console.log("is not a prime number");
}