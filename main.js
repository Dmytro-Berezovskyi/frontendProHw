let number = +prompt("Pleas enter an integer");

for (let i = 1; i <= 100; i++) {
    if (isNaN (number) ||  number === 0 || !Number.isInteger(number)) {
        number = +prompt("It is not an integer. Pleas enter an integer");
    } else {
        if (i**2 > number) {
            break;
        };
        console.log(i);
    };
};