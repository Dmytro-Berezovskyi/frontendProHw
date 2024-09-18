let arr = [5, 8, true, "fewf", 65, "fger", 3];

function arithmeticMean () {
    let arrNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arrNumber.push(arr[i]);
        };
    };
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        sum += arrNumber[i];
    };
    let mean = sum / arrNumber.length;
    console.log("Filtered array", arrNumber);
    console.log(`Array sum ${sum}`);
    console.log(`Arithmetic mean ${mean}`);
    return mean;
};

arithmeticMean(arr);