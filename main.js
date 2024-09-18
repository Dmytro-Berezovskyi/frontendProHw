const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]);
        };
    };
    console.log(newArray);
    return newArray;
};

removeElement(array, 6);