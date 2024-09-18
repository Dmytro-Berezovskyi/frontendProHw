function createSum() {
    let sum = 0;
    return  function () {
        sum += 4;
        console.log(sum);
    };
};

const mySum = createSum();
mySum();
mySum();
mySum();
mySum();