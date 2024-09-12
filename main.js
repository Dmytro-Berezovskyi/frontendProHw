let number = +prompt("Pleas enter an integer");

while (isNaN(number) || number === 0 || !Number.isInteger(number)) {
    number = +prompt("It is not an integer. Please enter an integer");
};

for (let i = 1; i <= 100; i++) {
    if (i**2 > number) {
        break;
    }
    console.log(i);
};