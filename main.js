let arr = [1, 3, 8, 21, 10, 14, 7, 73];

const evens = arr.filter((number) => {
    return number % 2 === 0;
});

console.log(evens);