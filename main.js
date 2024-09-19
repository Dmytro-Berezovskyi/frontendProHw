function addingTwoNumbers (first) {
    return function (second) {
        return first + second;
    };
};

console.log(addingTwoNumbers(5)(2));