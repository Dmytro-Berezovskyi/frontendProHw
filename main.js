function eraseFromStr(text, deleteLetters) {
    let newStr = [];

    for (let letter of text) {
        if (!deleteLetters.includes(letter)) {
            newStr.push(letter);
        };
    };

    return newStr.join('');
};

let userStr = prompt("Enter a string:");
let lettersDelete = prompt("Enter the letters to delete (without spaces):").split('');

let cleanedStr = eraseFromStr(userStr, lettersDelete);
console.log(cleanedStr);